"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SqyshMascot } from "@/app/components/SqyshMascot";
import { SlimNav } from "@/app/components/SlimNav";
import { useAppDispatch } from "@/app/redux/store";
import { useBoop } from "@/app/lib/hooks/useBoop";
import { Typewriter } from "@/app/components/common/TypeWriter";
import { cartActions } from "@/app/redux/features/cartSlice";

const successBoopLines = [
  "order received.",
  "shipping it your way.",
  "great taste, by the way.",
  "the octopus thanks you.",
  "deploying to your doorstep.",
];

export function SuccessClient() {
  const dispatch = useAppDispatch();
  const clearedRef = useRef(false);

  const boop = useBoop(successBoopLines, "order confirmed.");

  // Clear the cart once, on mount, after a successful checkout.
  useEffect(() => {
    if (clearedRef.current) return;
    clearedRef.current = true;
    dispatch(cartActions.clear());
  }, [dispatch]);

  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      <SlimNav />

      <div className="flex-1 flex flex-col items-center justify-center px-5 min-h-0">
        <div className="w-full max-w-sm flex flex-col items-center">
          <p className="font-mono text-brand-green text-sm tracking-[0.3em] uppercase mb-2">
            ✓ paid
          </p>

          <SqyshMascot onBoop={boop.onBoop} size={90} />

          <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mt-3 mb-6 shrink-0">
            <p className="font-mono text-sm text-brand-green">
              <Typewriter sentence={boop.text} speed={24} cursor />
            </p>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
          </div>

          <p className="font-body text-sm text-sqysh-muted text-center mb-6 max-w-xs">
            Your order&apos;s in. You&apos;ll get a confirmation email with
            tracking once it ships.
          </p>

          <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
            <Link
              href="/shop"
              className="group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2"
            >
              <span className="font-mono text-sm text-brand-purple">$</span>
              <span className="font-mono text-sm text-sqysh-text">
                cd ../shop
              </span>
              <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
                keep shopping ↵
              </span>
            </Link>
            <Link
              href="/"
              className="group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2"
            >
              <span className="font-mono text-sm text-brand-purple">$</span>
              <span className="font-mono text-sm text-sqysh-text">cd ~</span>
              <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
                back home ↵
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
