import { resendAlert } from "@/app/lib/actions/email/resendAlert";
import { getCatalog } from "@/app/lib/actions/printful/getCatelog";
import { fulfillOrder } from "@/app/lib/actions/shop/fulfillOrder";
import { CatalogCard } from "@/app/types/shop.types";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs"; // stripe + prisma need node, not edge
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig!, WEBHOOK_SECRET);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  try {
    // ─ Idempotency ─
    const existing = await prisma.shopOrder.findUnique({
      where: { stripeSessionId: session.id },
    });
    if (existing?.status === "SUBMITTED") {
      return NextResponse.json({ received: true, deduped: true });
    }

    // ─ Pull the cart back from Stripe's line items (expand product for its metadata) ─
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      expand: ["data.price.product"],
      limit: 100,
    });

    const findImageByVariantId = (
      catalog: CatalogCard[],
      variantId: number,
    ): string | null => {
      for (const card of catalog) {
        const cw = card.colorways.find((c) =>
          c.variants.some((v) => v.printfulVariantId === variantId),
        );
        if (cw) {
          const v = cw.variants.find((x) => x.printfulVariantId === variantId);
          return v?.image ?? cw.image ?? null;
        }
      }
      return null;
    };

    const catalog = await getCatalog();

    const items = lineItems.data.map((li) => {
      const product = li.price?.product as Stripe.Product;
      const md = product?.metadata ?? {};
      const variantId = Number(md.printfulVariantId);
      return {
        printfulVariantId: variantId,
        productName: product?.name ?? "unknown",
        colorway: md.colorway || null,
        size: md.size || null,
        image: findImageByVariantId(catalog, variantId), // ← resolved here, stored in DB
        quantity: li.quantity ?? 1,
        unitAmount: li.price?.unit_amount ?? 0,
      };
    });

    // Guard: every line must carry a Printful variant id, or fulfillment can't proceed
    if (
      items.some(
        (i) => !i.printfulVariantId || Number.isNaN(i.printfulVariantId),
      )
    ) {
      throw new Error("A line item is missing its printfulVariantId metadata.");
    }

    const ship = session.customer_details; // email, name
    const shipping = session.collected_information?.shipping_details; // Dahlia
    const addr = shipping?.address ?? ship?.address;

    // ─ PENDING row (items stored as JSON — one order, many items) ─
    if (!existing) {
      await prisma.shopOrder.create({
        data: {
          stripeSessionId: session.id,
          stripePaymentIntent: session.payment_intent as string | null,
          items, // Json
          amountTotal: session.amount_total ?? 0,
          currency: session.currency ?? "usd",
          email: ship?.email ?? "unknown",
          country: addr?.country ?? null,
          region: addr?.state ?? null,
          city: addr?.city ?? null,
          status: "PENDING",
        },
      });
    }

    const result = await fulfillOrder(session.id);

    if (!result.success) {
      // fulfillOrder already marked the row FULFILLMENT_FAILED with a precise reason.
      // We just alert. No status write here.
      try {
        await resendAlert({
          sessionId: session.id,
          email: session.customer_details?.email ?? "unknown",
          amount: session.amount_total ?? 0,
          reason: result.error ?? "unknown",
        });
      } catch (e) {
        console.error("[webhook] alert failed", e);
      }
      return NextResponse.json({ received: true, fulfillment: "failed" });
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    // Unexpected throw BEFORE/AROUND fulfillment (idempotency, parsing, PENDING insert).
    // fulfillOrder may not have run, so we mark failed here as the safety net.
    const reason = err instanceof Error ? err.message : "unknown";
    console.error("[stripe webhook] webhook error", reason);

    await prisma.shopOrder
      .update({
        where: { stripeSessionId: session.id },
        data: { status: "FULFILLMENT_FAILED", failureReason: reason },
      })
      .catch(() => {});

    // ─ Alert yourself: money in, nothing printing ─
    try {
      await resendAlert({
        sessionId: session.id,
        email: session.customer_details?.email ?? "unknown",
        amount: session.amount_total ?? 0,
        reason,
      });
    } catch (e) {
      console.error("[stripe webhook] alert email also failed", e);
    }

    return NextResponse.json({ received: true, fulfillment: "failed" });
  }
}
