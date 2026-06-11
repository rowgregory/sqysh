"use client";

import { Typewriter } from "@/app/components/common/TypeWriter";
import { SlimNav } from "@/app/components/SlimNav";
import { SqyshMark } from "@/app/components/SqyshMark";
import { chirp, playBoop, SqyshMascot } from "@/app/components/SqyshMascot";
import { claimScore } from "@/app/lib/actions/game-score/claimScore";
import { recordGame } from "@/app/lib/actions/game-score/recordGame";
import { debugLines } from "@/app/lib/constants/home.constants";
import { useSounds } from "@/app/lib/hooks/useSounds";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Falling = {
  id: number;
  kind: "bug" | "hotfix";
  x: number;
  duration: number;
  hit: boolean;
};

export default function SqyshDebug({
  leaderboard,
}: {
  leaderboard: {
    id: string;
    city: string | null;
    initials: string | null;
    score: number;
  }[];
}) {
  const router = useRouter();

  const [items, setItems] = useState<Falling[]>([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [phase, setPhase] = useState<"intro" | "playing" | "over">("intro");
  const [scoreRowId, setScoreRowId] = useState<string | null>(null);
  const [qualifies, setQualifies] = useState(false);
  const [initials, setInitials] = useState("");
  const [claiming, setClaiming] = useState(false);
  const [claimError, setClaimError] = useState<string | null>(null);

  const livesRef = useRef(3);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nextIdRef = useRef(0);
  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scoreRef = useRef(0); // mirrors score for spawn-speed math without re-binding

  const [bubbleText, setBubbleText] = useState(
    "bugs are falling. tap to sqysh them.",
  );
  const boopCountRef = useRef(0);
  const bubbleResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { play } = useSounds();

  // Start spawning on mount
  useEffect(() => {
    if (phase !== "playing") return;

    const spawn = () => {
      const id = nextIdRef.current++;
      const isHotfix = livesRef.current < 3 && Math.random() < 0.12;
      const x = 8 + Math.random() * 84;

      const item: Falling = isHotfix
        ? { id, kind: "hotfix", x, duration: 2.2, hit: false }
        : {
            id,
            kind: "bug",
            x,
            duration: Math.max(1.6, 4 - scoreRef.current * 0.12),
            hit: false,
          };

      setItems((prev) => [...prev, item]);
    };
    spawn();
    spawnRef.current = setInterval(spawn, 1100);
    return () => {
      if (spawnRef.current) clearInterval(spawnRef.current);
    };
  }, [phase]);

  const playHotfix = () => {
    const Ctx = window.AudioContext;
    if (!Ctx) return;
    audioCtxRef.current ??= new Ctx();
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;
    chirp(now, 620, 1.5, 0.08, 0.09, false, ctx);
    chirp(now + 0.09, 880, 1.6, 0.09, 0.14, true, ctx); // sparkle on the high note
  };

  const start = () => {
    play("se1");
    setItems([]);
    setScore(0);
    setLives(3);
    scoreRef.current = 0;
    livesRef.current = 3;
    setScoreRowId(null);
    setQualifies(false);
    setPhase("playing");
  };

  const squash = (id: number) => {
    setItems((b) => b.map((x) => (x.id === id ? { ...x, squashed: true } : x)));
    setScore((s) => s + 1);
    scoreRef.current += 1;
    playBoop(audioCtxRef); // combo idea: pitch rises with streak
    setTimeout(() => setItems((b) => b.filter((x) => x.id !== id)), 250);
  };

  const collect = (id: number) => {
    setItems((b) => b.map((x) => (x.id === id ? { ...x, hit: true } : x)));
    livesRef.current = Math.min(3, livesRef.current + 1);
    setLives(livesRef.current);
    playHotfix(); // see below
    setTimeout(() => setItems((b) => b.filter((x) => x.id !== id)), 300);
  };

  const onTap = (item: Falling) => {
    if (item.hit) return;
    if (item.kind === "hotfix") collect(item.id);
    else squash(item.id);
  };

  const onLand = (item: Falling) => {
    if (item.hit) return;
    if (item.kind === "hotfix") {
      setItems((b) => b.filter((x) => x.id !== item.id)); // missed hotfix = no penalty, just gone
    } else {
      miss(item.id);
    }
  };

  const playMiss = () => {
    const Ctx = window.AudioContext;
    if (!Ctx) return;
    audioCtxRef.current ??= new Ctx();
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;

    // Short high-ish blip, then the low womp — "uh-oh" in two notes
    chirp(now, 240, 0.9, 0.06, 0.08, false, ctx);
    chirp(now + 0.09, 170, 0.55, 0.1, 0.22, false, ctx);
  };

  const finishGame = async () => {
    setPhase("over");
    const res = await recordGame(scoreRef.current);
    if (res.success) {
      setScoreRowId(res.data.id);
      setQualifies(res.data.qualifies);
    }
  };

  const miss = (id: number) => {
    setItems((b) => b.filter((x) => x.id !== id));
    playMiss();
    livesRef.current -= 1;
    setLives(livesRef.current);
    if (livesRef.current <= 0) void finishGame();
  };

  const claim = async () => {
    if (!scoreRowId || initials.length === 0 || claiming) return;
    setClaiming(true);
    const res = await claimScore(scoreRowId, initials);
    setClaiming(false);
    if (res.success) {
      router.refresh();
      setPhase("intro");
    } else {
      setClaimError(res.error);
    }
  };

  const onBoop = () => {
    const line =
      debugLines[Math.min(boopCountRef.current, debugLines.length - 1)];
    boopCountRef.current += 1;
    setBubbleText(line);

    if (bubbleResetRef.current) clearTimeout(bubbleResetRef.current);
    bubbleResetRef.current = setTimeout(() => {
      setBubbleText("bugs are falling. tap to sqysh them.");
      boopCountRef.current = 0;
    }, 2500);
  };

  if (phase === "intro") {
    return (
      <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
        {/* ── Slim nav ── */}
        <SlimNav />

        <div className="flex-1 flex flex-col justify px-5 py-2 min-h-0">
          <div className="flex flex-col items-center w-full max-w-sm mx-auto max-h-full py-20">
            <SqyshMascot size={90} onBoop={onBoop} />
            <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mt-3 mb-4 shrink-0">
              <p className="font-mono text-sm text-brand-green">
                <Typewriter sentence={bubbleText} speed={24} cursor />
              </p>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
            </div>

            <div className="bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden text-left w-full">
              <button
                onClick={start}
                className="group w-full flex items-center gap-3 px-4 py-4 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2 border-b border-sqysh-border"
              >
                <span className="font-mono text-sm text-brand-green">$</span>
                <span className="font-mono text-sm text-sqysh-text">
                  sqysh debug --start
                </span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                  begin ↵
                </span>
              </button>
              <Link
                href="/arcade"
                className="group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2"
              >
                <span className="font-mono text-sm text-brand-green">$</span>
                <span className="font-mono text-sm text-sqysh-text">cd ..</span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                  back ↵
                </span>
              </Link>
              <Link
                href="/"
                className="group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2"
              >
                <span className="font-mono text-sm text-brand-green">$</span>
                <span className="font-mono text-sm text-sqysh-text">cd ~</span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                  back home ↵
                </span>
              </Link>
            </div>

            {leaderboard.length > 0 && (
              <div className="bg-sqysh-surface border border-sqysh-border rounded-xl px-4 py-4 mt-3 text-left w-full">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-muted mb-3">
                  $ sqysh top --10
                </p>
                <ol className="m-0 p-0 list-none flex flex-col gap-1.5">
                  {leaderboard.map((entry, i) => (
                    <li
                      key={entry.id}
                      className="grid grid-cols-[2ch_5ch_1fr_auto] gap-3 font-mono text-sm"
                    >
                      <span className="text-sqysh-subtle">{i + 1}</span>
                      <span className="text-brand-green tracking-[0.2em]">
                        {entry.initials}
                      </span>
                      <span className="text-sqysh-muted text-xs self-center truncate">
                        {entry.city ?? "somewhere"}
                      </span>
                      <span className="text-sqysh-text">{entry.score}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  if (phase === "over") {
    return (
      <div className="min-h-dvh flex items-center justify-center px-5 bg-sqysh-bg">
        <div className="w-full max-w-sm text-center">
          <SqyshMark size={70} className="mx-auto" />

          <h2 className="font-sans font-bold text-3xl tracking-tight mb-6">
            {score}&nbsp;bugs sqysh&apos;d
          </h2>

          {qualifies && (
            <div className="bg-sqysh-surface border border-sqysh-border rounded-xl px-4 py-4 mb-3 text-left">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-green mb-3">
                top 10 — enter your initials
              </p>
              <div className="flex gap-2">
                <input
                  value={initials}
                  onChange={(e) =>
                    setInitials(
                      e.target.value
                        .toUpperCase()
                        .replace(/[^A-Z]/g, "")
                        .slice(0, 3),
                    )
                  }
                  maxLength={3}
                  autoCapitalize="characters"
                  autoComplete="off"
                  placeholder="AAA"
                  className="input-sqysh w-24 font-mono text-center text-lg tracking-[0.4em] uppercase"
                />
                <button
                  onClick={() => void claim()}
                  disabled={claiming || initials.length === 0}
                  className="group flex-1 flex items-center gap-3 px-4 bg-transparent border border-sqysh-border rounded-md cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2 disabled:opacity-50 disabled:cursor-default"
                >
                  <span className="font-mono text-sm text-brand-green">$</span>
                  <span className="font-mono text-sm text-sqysh-text">
                    {claiming ? "saving..." : "sqysh claim"}
                  </span>
                </button>
              </div>

              {claimError && (
                <p className="font-mono text-xs text-sqysh-error mt-2">
                  ! {claimError}
                </p>
              )}
            </div>
          )}

          <div className="bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
            <button
              onClick={start}
              className="group w-full flex items-center gap-3 px-4 py-4 border-b border-sqysh-border hover:bg-sqysh-surface-2"
            >
              <span className="font-mono text-sm text-brand-green">$</span>
              <span className="font-mono text-sm">sqysh debug --retry</span>
            </button>
            {/* wire this row to go("contact") */}
            <Link
              href="/?view=contact"
              className="group w-full flex items-center gap-3 px-4 py-4 hover:bg-sqysh-surface-2"
            >
              <span className="font-mono text-sm text-brand-green">$</span>
              <span className="font-mono text-sm">sqysh hire</span>
              <span className="font-mono text-[11px] text-sqysh-subtle ml-auto">
                got bugs of your own? ↵
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-sqysh-bg">
      {/* HUD */}
      <div className="relative min-h-dvh overflow-hidden bg-sqysh-bg">
        <span>
          sqysh&apos;d: <span className="text-brand-green">{score}</span>
        </span>
        <span>
          {"●".repeat(lives)}
          {"○".repeat(3 - lives)}
        </span>
      </div>

      {/* Bugs */}
      {items.map((item) => (
        <div
          key={item.id}
          className="bug-fall absolute top-0"
          style={{ left: `${item.x}%`, animationDuration: `${item.duration}s` }}
          onAnimationEnd={() => onLand(item)}
        >
          <button
            onPointerDown={() => onTap(item)}
            className={`w-11 h-11 flex items-center justify-center bg-transparent border-none cursor-pointer ${
              item.hit
                ? item.kind === "hotfix"
                  ? "hotfix-collect"
                  : "bug-squash"
                : ""
            }`}
            aria-label={
              item.kind === "hotfix" ? "collect hotfix" : "squash bug"
            }
          >
            {item.kind === "hotfix" ? <HotfixIcon /> : <BugIcon />}
          </button>
        </div>
      ))}

      {/* Sqysh watches from the bottom — his glance-at-tap already makes him track your squashes */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <SqyshMascot onBoop={() => {}} />
      </div>
    </div>
  );
}

const BugIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="13" rx="6" ry="7" fill="#FF5C5C" />
    <circle cx="12" cy="6" r="3" fill="#FF5C5C" />
    <path
      d="M6 9 L3 6 M6 13 L2 13 M6 17 L3 20 M18 9 L21 6 M18 13 L22 13 M18 17 L21 20"
      stroke="#FF5C5C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line x1="12" y1="9" x2="12" y2="19" stroke="#0F1115" strokeWidth="1" />
  </svg>
);

const HotfixIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M12 21 C 7 16.5, 3 13, 3 8.5 C 3 5.4, 5.4 3, 8.2 3 C 10 3, 11.3 4, 12 5.2 C 12.7 4, 14 3, 15.8 3 C 18.6 3, 21 5.4, 21 8.5 C 21 13, 17 16.5, 12 21 Z"
      fill="#a6ff4d"
    />
  </svg>
);
