import "server-only";
import Stripe from "stripe";
import prisma from "@/prisma/client";
import { createPrintfulOrder } from "@/app/lib/actions/printful/createPrintfulOrder";
import { sendOrderConfirmation } from "@/app/lib/actions/email/sendOrderConfirmation";
import { OrderItemShape } from "@/app/types/dashboard.types";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});

export async function fulfillOrder(
  stripeSessionId: string,
): Promise<{ success: boolean; error?: string }> {
  // 1. Load the stored order
  const order = await prisma.shopOrder.findUnique({
    where: { stripeSessionId },
  });
  if (!order) return { success: false, error: "Order not found." };
  if (order.status === "SUBMITTED") {
    return { success: true }; // already fulfilled, no-op (idempotent)
  }

  const items = order.items as OrderItemShape[];

  // Guard: variant ids must be present
  if (
    items.some((i) => !i.printfulVariantId || Number.isNaN(i.printfulVariantId))
  ) {
    const reason = "A line item is missing its printfulVariantId.";
    await prisma.shopOrder
      .update({
        where: { stripeSessionId },
        data: { status: "FULFILLMENT_FAILED", failureReason: reason },
      })
      .catch(() => {});
    return { success: false, error: reason };
  }

  // 2. Re-fetch the shipping address from Stripe (not stored on the row)
  let recipient: {
    name: string;
    address1: string;
    address2?: string;
    city: string;
    stateCode?: string;
    countryCode: string;
    zip: string;
    email?: string;
  };
  try {
    const session = await stripe.checkout.sessions.retrieve(stripeSessionId);
    const ship = session.customer_details;
    const shipping = session.collected_information?.shipping_details;
    const addr = shipping?.address ?? ship?.address;
    recipient = {
      name: shipping?.name ?? ship?.name ?? "",
      address1: addr?.line1 ?? "",
      address2: addr?.line2 ?? undefined,
      city: addr?.city ?? "",
      stateCode: addr?.state ?? undefined,
      countryCode: addr?.country ?? "",
      zip: addr?.postal_code ?? "",
      email: ship?.email ?? order.email,
    };
  } catch (e) {
    const reason = `Couldn't retrieve Stripe session: ${e instanceof Error ? e.message : "unknown"}`;
    await prisma.shopOrder
      .update({
        where: { stripeSessionId },
        data: { status: "FULFILLMENT_FAILED", failureReason: reason },
      })
      .catch(() => {});
    return { success: false, error: reason };
  }

  // 3. Place the Printful order
  const result = await createPrintfulOrder({
    externalId: order.id,
    recipient,
    items: items.map((i) => ({
      printfulVariantId: i.printfulVariantId,
      quantity: i.quantity,
    })),
  });

  if (!result.success) {
    await prisma.shopOrder
      .update({
        where: { stripeSessionId },
        data: { status: "FULFILLMENT_FAILED", failureReason: result.error },
      })
      .catch(() => {});
    return { success: false, error: result.error };
  }

  // 4. Mark submitted
  await prisma.shopOrder.update({
    where: { stripeSessionId },
    data: {
      status: "SUBMITTED",
      printfulOrderId: result.data.printfulOrderId,
      printfulCost: result.data.cost ?? null,
      failureReason: null, // clear any prior failure
    },
  });

  // 5. Confirmation email (best-effort, never fatal)
  if (recipient.email) {
    const emailResult = await sendOrderConfirmation({
      to: recipient.email,
      orderId: stripeSessionId,
      items: items.map((i) => ({
        productName: i.productName,
        colorway: i.colorway,
        size: i.size,
        quantity: i.quantity,
        unitAmount: i.unitAmount,
        image: i.image,
      })),
      amountTotal: order.amountTotal,
      currency: order.currency,
    });
    if (!emailResult.success) {
      console.error(
        "[fulfillOrder] confirmation email failed",
        emailResult.error,
      );
    }
  }

  return { success: true };
}
