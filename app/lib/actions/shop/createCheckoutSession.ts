"use server";

import Stripe from "stripe";
import { getCatalog } from "../printful/getCatelog";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});

type CartInput = {
  slug: string;
  colorwayKey: string;
  size: string | null;
  quantity: number;
};
type ActionResult =
  | { success: true; url: string }
  | { success: false; error: string };

export async function createCheckoutSession(
  cart: CartInput[],
): Promise<ActionResult> {
  if (!cart.length) return { success: false, error: "Your cart is empty." };

  const catalog = await getCatalog();

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  for (const item of cart) {
    const card = catalog.find((c) => c.slug === item.slug);
    const colorway = card?.colorways.find((c) => c.key === item.colorwayKey);
    const variant =
      colorway?.variants.find((v) => v.size === item.size) ??
      colorway?.variants[0];

    if (!card || !colorway || !variant?.printfulVariantId) {
      return {
        success: false,
        error: `"${item.slug}" is no longer available.`,
      };
    }

    line_items.push({
      quantity: Math.max(1, item.quantity),
      price_data: {
        currency: "usd",
        unit_amount: Math.round(variant.price * 100), // price from the server, per-size
        product_data: {
          name: `${card.name} — ${colorway.label}${item.size ? ` / ${item.size}` : ""}`,
          images: colorway.image ? [colorway.image] : undefined,
          metadata: {
            printfulVariantId: String(variant.printfulVariantId),
            slug: card.slug,
            colorway: colorway.key,
            size: item.size ?? "",
          },
        },
      },
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 500, currency: "usd" },
            display_name: "Standard shipping",
          },
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/cart`,
    });
    if (!session.url)
      return { success: false, error: "Could not start checkout." };
    return { success: true, url: session.url };
  } catch (err) {
    console.error("[createCheckoutSession]", err);
    return { success: false, error: "Checkout failed to start. Try again." };
  }
}
