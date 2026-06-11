"use client";

import Link from "next/link";
import { SqyshMascot } from "@/app/components/SqyshMascot";
import { SlimNav } from "@/app/components/SlimNav";
import { useBoop } from "@/app/lib/hooks/useBoop";
import { Typewriter } from "@/app/components/common/TypeWriter";
import { Footer } from "@/app/components/Footer";
import { arcadeBoopLines, GAMES } from "@/app/lib/constants/arcade.constants";

export function ArcadeMenu() {
  const boop = useBoop(arcadeBoopLines, "pick a game.");

  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      <SlimNav />

      <div className="flex-1 flex flex-col items-center justify-center px-5 min-h-0">
        <div className="w-full max-w-sm flex flex-col items-center">
          <SqyshMascot onBoop={boop.onBoop} size={90} />

          <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mb-6 shrink-0">
            <p className="font-mono text-sm text-brand-green">
              <Typewriter sentence={boop.text} speed={24} cursor />
            </p>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
          </div>

          <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
            {GAMES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2"
              >
                <span className="font-mono text-sm text-brand-purple">$</span>
                <span className="font-mono text-sm text-sqysh-text">
                  {g.command}
                </span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
                  {g.hint} ↵
                </span>
              </Link>
            ))}

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
      <Footer />
    </main>
  );
}
