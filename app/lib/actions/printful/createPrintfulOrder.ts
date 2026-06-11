import "server-only"; // hard guard: this module can never be imported into a client component
import { pf } from "../../utils/pf";

type Recipient = {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  stateCode?: string; // US/CA need this
  countryCode: string;
  zip: string;
  email?: string;
};

type OrderItem = {
  printfulVariantId: number; // the SYNC variant id
  quantity: number;
};

type Result<T> = { success: true; data: T } | { success: false; error: string };

const AUTO_CONFIRM = process.env.PRINTFUL_AUTO_CONFIRM === "true";

export async function createPrintfulOrder(params: {
  recipient: Recipient;
  items: OrderItem[];
  externalId?: string; // pass the Stripe session id so Printful's record links back
}): Promise<Result<{ printfulOrderId: number; cost: number | null }>> {
  const { recipient, items, externalId } = params;

  try {
    const order = await pf(`/orders${AUTO_CONFIRM ? "?confirm=1" : ""}`, {
      method: "POST",
      body: JSON.stringify({
        external_id: externalId,
        recipient: {
          name: recipient.name,
          address1: recipient.address1,
          address2: recipient.address2,
          city: recipient.city,
          state_code: recipient.stateCode,
          country_code: recipient.countryCode,
          zip: recipient.zip,
          email: recipient.email,
        },
        items: items.map((i) => ({
          sync_variant_id: i.printfulVariantId,
          quantity: i.quantity,
        })),
      }),
    });

    // Printful returns costs as dollar strings (e.g. "50.87"). Convert to cents.
    const totalStr = order.result?.costs?.total;
    const cost =
      totalStr != null ? Math.round(parseFloat(totalStr) * 100) : null;

    return { success: true, data: { printfulOrderId: order.result.id, cost } };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Printful order failed.",
    };
  }
}
