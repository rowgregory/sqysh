"use client";

import Link from "next/link";
import { SqyshMascot } from "@/app/components/SqyshMascot";
import { SlimNav } from "@/app/components/SlimNav";
import { Typewriter } from "./components/common/TypeWriter";
import { useBoop } from "./lib/hooks/useBoop";
import { Footer } from "./components/Footer";

export const notFoundBoopLines = [
  "this page returned null.",
  "404 — even i can't find it.",
  "cd: no such directory.",
  "you've wandered off the map.",
  "this route doesn't exist. yet.",
  "segmentation fault (just kidding).",
  "nothing here but me.",
  "you broke it. (you didn't.)",
  "git checkout -- a real page",
  "lost? same.",
];

export default function NotFoundClient() {
  const boop = useBoop(notFoundBoopLines, "404 — page not found.");

  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      <SlimNav />

      <div className="flex-1 flex flex-col items-center justify-center px-5 min-h-0">
        <div className="w-full max-w-sm flex flex-col items-center">
          {/* big 404 */}
          <p className="font-mono text-brand-purple text-sm tracking-[0.3em] uppercase mb-2">
            error 404
          </p>

          <SqyshMascot onBoop={boop.onBoop} size={90} />

          <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mt-3 mb-8 shrink-0">
            <p className="font-mono text-sm text-brand-green">
              <Typewriter sentence={boop.text} speed={24} cursor />
            </p>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
          </div>

          {/* nav back */}
          <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
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
            <Link
              href="/shop"
              className="group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2"
            >
              <span className="font-mono text-sm text-brand-purple">$</span>
              <span className="font-mono text-sm text-sqysh-text">
                cd ../shop
              </span>
              <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
                browse the shop ↵
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
