"use client";

import { useRef, useState } from "react";
import { SqyshMascot } from "@/app/components/SqyshMascot";
import { useBoop } from "@/app/lib/hooks/useBoop";
import Link from "next/link";

type Phase = "idle" | "waiting" | "ready" | "result" | "tooSoon";

const deployBoopLines = [
  "itchy trigger finger?",
  "patience, deployer.",
  "wait for green.",
  "not yet, not yet...",
];

const BRAND_GRADIENT =
  "linear-gradient(115deg, #a6ff4d, #37e1c2, #7b5cff, #a6ff4d)";
const MUTED_GRADIENT = "linear-gradient(115deg, #2a2a32, #3a3a44, #2a2a32)";

export function SqyshDeploy() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [ms, setMs] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = useRef(0);

  const boop = useBoop(deployBoopLines, "how fast can you ship?");

  const clearPending = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const arm = () => {
    setPhase("waiting");
    setMs(null);
    const delay = 1200 + Math.random() * 2300;
    timeoutRef.current = setTimeout(() => {
      startRef.current = performance.now();
      setPhase("ready");
    }, delay);
  };

  const handleTap = () => {
    if (phase === "idle" || phase === "result" || phase === "tooSoon") {
      arm();
      return;
    }
    if (phase === "waiting") {
      clearPending();
      setPhase("tooSoon");
      return;
    }
    if (phase === "ready") {
      const elapsed = Math.round(performance.now() - startRef.current);
      setMs(elapsed);
      setBest((b) => (b === null ? elapsed : Math.min(b, elapsed)));
      setPhase("result");
    }
  };

  // per-phase button appearance
  const btn = (() => {
    switch (phase) {
      case "idle":
        return {
          label: "$ sqysh deploy",
          sub: "tap to start",
          style: { background: BRAND_GRADIENT },
          anim: "deploy-flow",
          text: "text-[#0a0a0c]",
        };
      case "waiting":
        return {
          label: "building…",
          sub: "wait for green",
          style: { background: MUTED_GRADIENT },
          anim: "deploy-flow-fast",
          text: "text-sqysh-muted",
        };
      case "ready":
        return {
          label: "$ ship it",
          sub: "TAP NOW",
          style: { background: "#a6ff4d" },
          anim: "",
          text: "text-[#0a0a0c]",
        };
      case "tooSoon":
        return {
          label: "deploy failed",
          sub: "too soon — tap to retry",
          style: { background: "#e24b4a" },
          anim: "",
          text: "text-white",
        };
      case "result":
        return {
          label: `${ms}ms`,
          sub: "tap to deploy again",
          style: { background: BRAND_GRADIENT },
          anim: "deploy-flow",
          text: "text-[#0a0a0c]",
        };
    }
  })();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm flex flex-col items-center">
        <SqyshMascot onBoop={boop.onBoop} size={64} />

        <div className="relative bg-sqysh-surface border border-sqysh-border rounded-xl px-4 py-2 mt-3 mb-6">
          <p className="font-mono text-xs text-brand-green">{boop.text}</p>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
        </div>

        <button
          onClick={handleTap}
          style={btn.style}
          className={`w-64 h-64 max-w-full aspect-square rounded-full mx-auto flex flex-col items-center justify-center gap-1 cursor-pointer border-none transition-transform duration-100 active:scale-[0.98] ${btn.anim} ${btn.text}`}
        >
          <span className="font-mono text-lg font-bold">{btn.label}</span>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase opacity-80">
            {btn.sub}
          </span>
        </button>

        {best !== null && (
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-sqysh-subtle mt-4">
            best · {best}ms
          </p>
        )}

        <Link
          href="/arcade"
          className="group flex items-center gap-2 font-mono text-sm mt-6 px-4 py-2.5 rounded-lg transition-colors hover:bg-sqysh-surface-2"
        >
          <span className="text-brand-purple">$</span>
          <span className="text-sqysh-text">cd ..</span>
          <span className="text-sqysh-subtle group-hover:text-brand-green transition-colors">
            back to arcade ↵
          </span>
        </Link>
      </div>
    </div>
  );
}
