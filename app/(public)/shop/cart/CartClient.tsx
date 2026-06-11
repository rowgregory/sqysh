"use client";

import Picture from "@/app/components/common/Picture";
import { Typewriter } from "@/app/components/common/TypeWriter";
import { SlimNav } from "@/app/components/SlimNav";
import { SqyshMascot } from "@/app/components/SqyshMascot";
import { createCheckoutSession } from "@/app/lib/actions/shop/createCheckoutSession";
import {
  cartBoopLines,
  emptyCartLines,
} from "@/app/lib/constants/shop.constants";
import { useBoop } from "@/app/lib/hooks/useBoop";
import { useMounted } from "@/app/lib/hooks/useMounted";
import {
  cartActions,
  lineKey,
  selectCount,
  selectLines,
  selectSubtotal,
} from "@/app/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import Link from "next/link";
import { useState } from "react";

export default function CartClient() {
  const mounted = useMounted();
  const lines = useAppSelector(selectLines);
  const subtotal = useAppSelector(selectSubtotal);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const empty = useBoop(emptyCartLines, "Cart returned null.");
  const filled = useBoop(cartBoopLines, "good picks.");

  const checkout = async () => {
    setLoading(true);
    setError(null);
    const res = await createCheckoutSession(
      lines.map((l) => ({
        slug: l.slug,
        colorwayKey: l.colorwayKey,
        size: l.size,
        quantity: l.qty,
      })),
    );
    if (res.success) window.location.href = res.url;
    else {
      setError(res.error);
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      <SlimNav />
      <div className="flex-1 flex flex-col items-center px-5 pt-6 pb-4 min-h-0">
        <div className="w-full max-w-sm flex flex-col min-h-0 max-h-full">
          {!mounted ? (
            <div className="flex flex-col items-center py-20">
              <p className="font-mono text-sm text-sqysh-subtle">
                loading cart<span className="animate-pulse">_</span>
              </p>
            </div>
          ) : lines.length === 0 ? (
            // ── Empty cart ── big mascot, full bubble, lots of room
            <div className="flex flex-col items-center py-20">
              <SqyshMascot onBoop={empty.onBoop} size={90} />
              <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mt-3 mb-4 shrink-0">
                <p className="font-mono text-sm text-brand-green">
                  <Typewriter sentence={empty.text} speed={24} cursor />
                </p>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
              </div>
              <Link
                href="/shop"
                className="group flex items-center gap-2 font-mono text-sm px-4 py-2.5 rounded-lg transition-colors duration-200 hover:bg-sqysh-surface-2"
              >
                <span className="text-brand-purple shrink-0">$</span>
                <span className="text-sqysh-text whitespace-nowrap">
                  sqysh search -i
                </span>
                <span className="text-sqysh-subtle transition-colors duration-200 group-hover:text-brand-green">
                  ↵
                </span>
              </Link>
            </div>
          ) : (
            // ── Filled cart ── compact mascot inline with the review header
            <>
              <div className="flex items-center gap-3 mb-4 shrink-0 self-start">
                <SqyshMascot onBoop={filled.onBoop} size={48} />
                <div className="relative bg-sqysh-surface border border-sqysh-border rounded-xl px-4 py-2">
                  <p className="font-mono text-xs text-brand-green">
                    <Typewriter sentence={filled.text} speed={24} cursor />
                  </p>
                  <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 rotate-45 bg-sqysh-surface border-l border-b border-sqysh-border" />
                </div>
              </div>

              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-muted mb-3 shrink-0 self-start">
                $ cart --review · {count} item{count === 1 ? "" : "s"}
              </p>

              <ul className="flex flex-col gap-3 list-none m-0 p-0 overflow-y-auto min-h-0 flex-1 pr-1 scrollbar-thin w-full">
                {lines.map((l) => {
                  const k = lineKey(l);
                  return (
                    <li
                      key={k}
                      className="flex items-center gap-3 bg-sqysh-surface border border-sqysh-border rounded-xl p-3"
                    >
                      <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-sqysh-surface-2 rounded">
                        {l.image && (
                          <Picture
                            src={l.image}
                            alt={l.name}
                            width={64}
                            height={64}
                            className="max-h-full w-auto object-contain"
                            priority
                          />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-sm text-sqysh-text truncate">
                          {l.name}
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-sqysh-subtle">
                          {l.colorwayLabel}
                          {l.size ? ` · ${l.size}` : ""}
                        </p>
                        <p className="font-mono text-xs text-brand-green mt-0.5">
                          ${l.price.toFixed(0)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() =>
                            dispatch(
                              cartActions.setQty({ key: k, qty: l.qty - 1 }),
                            )
                          }
                          className="font-mono text-sm text-sqysh-subtle w-6 h-6 border border-sqysh-border rounded hover:text-brand-green"
                        >
                          −
                        </button>
                        <span className="font-mono text-sm text-sqysh-text w-5 text-center">
                          {l.qty}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(
                              cartActions.setQty({ key: k, qty: l.qty + 1 }),
                            )
                          }
                          className="font-mono text-sm text-sqysh-subtle w-6 h-6 border border-sqysh-border rounded hover:text-brand-green"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => dispatch(cartActions.remove(k))}
                        className="font-mono text-[11px] text-sqysh-subtle hover:text-red-400 shrink-0 ml-1"
                      >
                        rm
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="shrink-0 pt-3 flex flex-col gap-2 w-full">
                <div className="flex items-baseline justify-between px-1">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-muted">
                    subtotal
                  </span>
                  <span className="font-mono text-sm text-sqysh-text">
                    ${subtotal.toFixed(0)}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-sqysh-subtle px-1">
                  + shipping, calculated at checkout
                </p>

                <button
                  onClick={checkout}
                  disabled={loading}
                  className="group w-full flex items-center gap-3 px-4 py-3.5 bg-sqysh-surface border border-sqysh-border rounded-xl cursor-pointer transition-colors hover:bg-sqysh-surface-2 disabled:opacity-60"
                >
                  <span className="font-mono text-sm text-brand-purple">$</span>
                  <span className="font-mono text-sm text-sqysh-text">
                    {loading ? "redirecting to checkout..." : "sqysh checkout"}
                  </span>
                  <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green">
                    {error ?? "pay securely ↵"}
                  </span>
                </button>

                <Link
                  href="/shop"
                  className="group w-full flex items-center gap-3 px-4 py-3.5 bg-sqysh-surface border border-sqysh-border rounded-xl hover:bg-sqysh-surface-2"
                >
                  <span className="font-mono text-sm text-brand-purple">$</span>
                  <span className="font-mono text-sm text-sqysh-text">
                    cd ../shop
                  </span>
                  <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green">
                    keep shopping ↵
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
