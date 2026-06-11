import { useState, useTransition } from "react";
import { STATUS_LABEL } from "../lib/constants/dashboard.constants";
import { fmtMoney } from "../lib/utils/currency.utils";
import { fmtDate } from "../lib/utils/date.utils";
import { retryFulfillment } from "../lib/actions/shop/retryFulfillment";
import { SerializedOrder } from "../types/dashboard.types";

export function OrderDrawer({
  order,
  onClose,
}: {
  order: SerializedOrder;
  onClose: () => void;
}) {
  const [isPending, startTransition] = useTransition();
  const [retryResult, setRetryResult] = useState<{
    success: boolean;
    error?: string;
  } | null>(null);

  const handleRetry = () => {
    setRetryResult(null);
    startTransition(async () => {
      const result = await retryFulfillment(order.stripeSessionId);
      setRetryResult(result);
      // on success, the server action revalidates /dashboard; close after a beat
      if (result.success) {
        setTimeout(onClose, 1200);
      }
    });
  };

  const isFailed = order.status === "FULFILLMENT_FAILED";

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      {/* panel */}
      <div className="relative w-full max-w-md bg-sqysh-bg border-l border-sqysh-border h-full overflow-y-auto">
        <div className="px-5 py-4 border-b border-sqysh-border flex items-center justify-between sticky top-0 bg-sqysh-bg">
          <span className="font-mono text-sm text-sqysh-text">
            order detail
          </span>
          <button
            onClick={onClose}
            className="font-mono text-sm text-sqysh-subtle hover:text-brand-green transition-colors cursor-pointer"
          >
            esc ✕
          </button>
        </div>

        <div className="px-5 py-5 space-y-6">
          {/* status + meta */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle mb-1">
              {order.email}
            </p>
            <p className="font-mono text-2xl text-sqysh-text">
              {fmtMoney(order.amountTotal, order.currency)}
            </p>
            <p className="font-mono text-[11px] text-sqysh-subtle mt-1">
              {fmtDate(order.createdAt)}
              {order.city ? ` · ${order.city}, ${order.region ?? ""}` : ""}
            </p>
          </div>

          {order.status === "SHIPPED" && order.trackingUrl && (
            <a
              href={order.trackingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-xs text-[#37e1c2] hover:underline mt-1"
            >
              track package → {order.trackingNumber ?? ""}
            </a>
          )}

          {/* failed banner + retry */}
          {isFailed && (
            <div className="border border-red-400/40 bg-red-400/10 p-4">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-red-400 mb-2">
                fulfillment failed
              </p>
              <p className="font-mono text-xs text-sqysh-muted leading-relaxed mb-4 wrap-break-word">
                {order.failureReason ?? "unknown reason"}
              </p>

              <button
                onClick={handleRetry}
                disabled={isPending}
                className="w-full bg-brand-green text-sqysh-bg font-mono text-sm py-3 hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer disabled:cursor-wait"
              >
                {isPending ? "retrying…" : "↻ retry fulfillment"}
              </button>

              {retryResult && !retryResult.success && (
                <p className="font-mono text-xs text-red-400 mt-3 wrap-break-word">
                  still failing: {retryResult.error}
                </p>
              )}
              {retryResult?.success && (
                <p className="font-mono text-xs text-brand-green mt-3">
                  ✓ fulfilled — order submitted to printful.
                </p>
              )}
            </div>
          )}

          {/* items */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle mb-3">
              items
            </p>
            <div className="space-y-2">
              {order.items.map((it, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-3 border border-sqysh-border bg-sqysh-surface px-3 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-sm text-sqysh-text">
                      {it.productName}
                    </p>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-sqysh-subtle">
                      {[it.colorway, it.size].filter(Boolean).join(" · ") ||
                        "—"}{" "}
                      · qty {it.quantity}
                    </p>
                  </div>
                  <span className="font-mono text-sm text-sqysh-muted whitespace-nowrap">
                    {fmtMoney(it.unitAmount * it.quantity, order.currency)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* fulfillment meta */}
          <div className="border-t border-sqysh-border pt-4 space-y-1.5">
            <MetaRow
              label="status"
              value={STATUS_LABEL[order.status] ?? order.status}
            />
            {order.printfulOrderId && (
              <MetaRow
                label="printful id"
                value={String(order.printfulOrderId)}
              />
            )}
            <MetaRow label="session" value={order.stripeSessionId} mono />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle whitespace-nowrap">
        {label}
      </span>
      <span
        className={`text-sqysh-muted text-right break-all ${
          mono ? "font-mono text-[10px]" : "font-mono text-xs"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
