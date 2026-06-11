import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
import prisma from "@/prisma/client";
import { sendShippingNotification } from "@/app/lib/actions/email/sendShippingNotfication";

export async function POST(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (key !== process.env.PRINTFUL_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "bad payload" }, { status: 400 });
  }

  // Printful sends { type, data: {...} }
  const type = payload?.type;
  if (type !== "package_shipped") {
    return NextResponse.json({ received: true, ignored: type });
  }

  try {
    const shipment = payload.data?.shipment;
    const printfulOrder = payload.data?.order;
    const printfulOrderId = printfulOrder?.id;

    if (!printfulOrderId) {
      return NextResponse.json({ received: true, note: "no order id" });
    }

    // find OUR order by the stored printful order id
    const order = await prisma.shopOrder.findFirst({
      where: { printfulOrderId: Number(printfulOrderId) },
    });
    if (!order) {
      console.error(
        "[printful webhook] no ShopOrder for printful id",
        printfulOrderId,
      );
      return NextResponse.json({ received: true, note: "order not found" });
    }

    // idempotency: don't re-send if already shipped
    if (order.status === "SHIPPED") {
      return NextResponse.json({ received: true, deduped: true });
    }

    // tracking details from the shipment
    const trackingNumber = shipment?.tracking_number ?? null;
    const trackingUrl = shipment?.tracking_url ?? null;
    const carrier = shipment?.carrier ?? null;

    // update status + store tracking
    await prisma.shopOrder
      .update({
        where: { id: order.id },
        data: {
          status: "SHIPPED",
          trackingNumber,
          trackingUrl,
          carrier,
        },
      })
      .catch(() => {});

    // email the customer (best-effort)
    const emailResult = await sendShippingNotification({
      to: order.email,
      orderId: order.id,
      trackingNumber,
      trackingUrl,
      carrier,
    });
    if (!emailResult.success) {
      console.error(
        "[printful webhook] shipping email failed",
        emailResult.error,
      );
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[printful webhook] error", err);
    // return 200 so Printful doesn't hammer retries; we logged it
    return NextResponse.json({ received: true, error: "handled" });
  }
}
