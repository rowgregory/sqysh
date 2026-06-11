// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { DashboardClient } from "./DashboardClient";
import { OrderItemShape } from "@/app/types/dashboard.types";

export const metadata = { title: "Dashboard — Sqysh" };

export default async function DashboardPage() {
  const session = await auth();
  if (session?.user?.role !== "SUPER_USER") redirect("/login");

  const orders = await prisma.shopOrder.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  // stats
  const totalRevenue = orders
    .filter((o) => o.status === "SUBMITTED")
    .reduce((sum, o) => sum + o.amountTotal, 0);
  const orderCount = orders.length;
  const failedCount = orders.filter(
    (o) => o.status === "FULFILLMENT_FAILED",
  ).length;

  // serialize Date -> string for the client component
  const serialized = orders.map((o) => ({
    id: o.id,
    stripeSessionId: o.stripeSessionId,
    items: o.items as OrderItemShape[],
    amountTotal: o.amountTotal,
    currency: o.currency,
    status: o.status,
    printfulOrderId: o.printfulOrderId,
    failureReason: o.failureReason,
    email: o.email,
    country: o.country,
    region: o.region,
    city: o.city,
    createdAt: o.createdAt.toISOString(),
    trackingNumber: o.trackingNumber,
    trackingUrl: o.trackingUrl,
  }));

  return (
    <DashboardClient
      orders={serialized}
      stats={{ totalRevenue, orderCount, failedCount }}
    />
  );
}
