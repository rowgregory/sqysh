"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { OrderDrawer } from "@/app/components/OrderDrawer";
import { SerializedOrder, Stats } from "@/app/types/dashboard.types";
import { fmtMoney } from "@/app/lib/utils/currency.utils";
import { fmtDate } from "@/app/lib/utils/date.utils";
import {
  STATUS_LABEL,
  STATUS_STYLES,
} from "@/app/lib/constants/dashboard.constants";
import Link from "next/link";

export function DashboardClient({
  orders,
  stats,
}: {
  orders: SerializedOrder[];
  stats: Stats;
}) {
  const [selected, setSelected] = useState<SerializedOrder | null>(null);

  return (
    <main className="min-h-dvh bg-sqysh-bg text-sqysh-text">
      {/* topbar */}
      <div className="border-b border-sqysh-border">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-mono text-brand-purple text-sm">$</span>
            <span className="font-mono text-sm text-sqysh-text">
              sqysh dashboard
            </span>
          </Link>
          <button
            onClick={() => signOut({ redirectTo: "/login" })}
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle hover:text-brand-green transition-colors cursor-pointer"
          >
            sign out
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-6">
        {/* stats — compact, brand-colored */}
        <div className="flex items-stretch gap-2 mb-8">
          <StatTile
            label="revenue"
            value={fmtMoney(stats.totalRevenue)}
            accent="green"
          />
          <StatTile
            label="orders"
            value={String(stats.orderCount)}
            accent="purple"
          />
          <StatTile
            label="failed"
            value={String(stats.failedCount)}
            accent={stats.failedCount > 0 ? "red" : "muted"}
          />
        </div>

        {/* orders list */}
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle mb-3">
          all orders
        </p>

        {orders.length === 0 ? (
          <div className="border border-sqysh-border bg-sqysh-surface px-4 py-10 text-center">
            <p className="font-mono text-sm text-sqysh-muted">no orders yet.</p>
          </div>
        ) : (
          <div className="border border-sqysh-border bg-sqysh-surface overflow-hidden">
            {orders.map((o, i) => (
              <button
                key={o.id}
                onClick={() => setSelected(o)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-sqysh-surface-2 cursor-pointer ${
                  i !== 0 ? "border-t border-sqysh-border" : ""
                }`}
              >
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-sm text-sqysh-text truncate">
                    {o.email}
                  </p>
                  <p className="font-mono text-[11px] text-sqysh-subtle">
                    {fmtDate(o.createdAt)} ·{" "}
                    {o.items.reduce((n, it) => n + it.quantity, 0)} item
                    {o.items.reduce((n, it) => n + it.quantity, 0) !== 1
                      ? "s"
                      : ""}
                  </p>
                </div>
                <span className="font-mono text-sm text-sqysh-text whitespace-nowrap">
                  {fmtMoney(o.amountTotal, o.currency)}
                </span>
                <span
                  className={`font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-1 border ${
                    STATUS_STYLES[o.status] ??
                    "text-sqysh-subtle border-sqysh-border"
                  }`}
                >
                  {STATUS_LABEL[o.status] ?? o.status.toLowerCase()}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <OrderDrawer order={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}

function StatTile({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "green" | "purple" | "red" | "muted";
}) {
  const valueColor = {
    green: "text-brand-green",
    purple: "text-brand-purple",
    red: "text-red-400",
    muted: "text-sqysh-text",
  }[accent];

  const borderColor = {
    green: "border-brand-green/30",
    purple: "border-brand-purple/30",
    red: "border-red-400/40",
    muted: "border-sqysh-border",
  }[accent];

  return (
    <div
      className={`flex-1 border ${borderColor} bg-sqysh-surface px-3 py-2.5`}
    >
      <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-sqysh-subtle mb-0.5">
        {label}
      </p>
      <p className={`font-mono text-base leading-none ${valueColor}`}>
        {value}
      </p>
    </div>
  );
}
