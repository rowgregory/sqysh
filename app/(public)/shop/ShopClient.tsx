"use client";

import Link from "next/link";
import { useState } from "react";
import { SqyshMascot } from "@/app/components/SqyshMascot";
import { Typewriter } from "@/app/components/common/TypeWriter";
import { ShopCard } from "@/app/components/shop/ShopCard";
import { CatalogCard, GroupKey } from "@/app/types/shop.types";
import { SlimNav } from "@/app/components/SlimNav";
import { Footer } from "@/app/components/Footer";

const GROUP_LINES: Record<GroupKey, string> = {
  clothing: "wear the bug.",
  accessories: "desk, mug, and everything between.",
};
const ALL_LINE = "the whole registry. take your time.";

type Phase = "group" | "type" | "browse";

export function RefreshCatalogButton() {
  const [status, setStatus] = useState("");
  const run = async () => {
    setStatus("$ syncing...");
    const res = await fetch("/api/admin/refresh-catalog", {
      method: "POST",
    }).then((r) => r.json());
    setStatus(
      res.ok ? `$ synced ${res.count} products ✓` : `error: ${res.error}`,
    );
  };
  return (
    <button onClick={run} className="font-mono text-sm text-brand-green">
      {status || "$ sqysh catalog --sync"}
    </button>
  );
}

export const ShopClient = ({ catalog }: { catalog: CatalogCard[] }) => {
  const [phase, setPhase] = useState<Phase>("group");
  const [group, setGroup] = useState<GroupKey | null>(null);
  const [type, setType] = useState<string | null>(null);

  const groups: GroupKey[] = ["clothing", "accessories"];
  const groupCount = (g: GroupKey) =>
    catalog.filter((c) => c.group === g).length;

  const typesInGroup = (g: GroupKey) => [
    ...new Set(catalog.filter((c) => c.group === g).map((c) => c.type)),
  ];
  const typeCount = (g: GroupKey, t: string) =>
    catalog.filter((c) => c.group === g && c.type === t).length;

  const visible = catalog.filter(
    (c) => (!group || c.group === group) && (!type || c.type === type),
  );

  const pickGroup = (g: GroupKey | null) => {
    setGroup(g);
    setType(null);
    setPhase(g === null ? "browse" : "type");
  };
  const pickType = (t: string) => {
    setType(t);
    setPhase("browse");
  };

  const bubbleLine =
    phase === "group"
      ? "welcome to the registry! what are you looking for?"
      : phase === "type" && group
        ? GROUP_LINES[group]
        : type
          ? `every ${type.toLowerCase()}. colorways inside.`
          : ALL_LINE;

  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      {process.env.NODE_ENV === "development" && <RefreshCatalogButton />}
      {/* ── Slim nav ── */}
      <SlimNav />

      <div className="flex-1 flex flex-col items-center px-5 py-2 min-h-0">
        <div className="w-full max-w-sm flex flex-col items-center min-h-0 max-h-full">
          <SqyshMascot
            size={phase === "group" ? 90 : phase === "type" ? 72 : 56}
          />
          <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mt-3 mb-4 shrink-0">
            <p className="font-mono text-sm text-brand-green">
              <Typewriter sentence={bubbleLine} speed={24} cursor />
            </p>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
          </div>

          {/* ════ LEVEL 1: GROUP ════ */}
          {phase === "group" && (
            <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
              {groups.map((g) => (
                <button
                  key={g}
                  onClick={() => pickGroup(g)}
                  className="group w-full flex items-center gap-3 px-4 py-4 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2 border-b border-sqysh-border"
                >
                  <span className="font-mono text-sm text-brand-purple shrink-0">
                    $
                  </span>
                  <span className="font-mono text-sm text-sqysh-text whitespace-nowrap">
                    sqysh search --tag={g}
                  </span>
                  <span className="font-mono text-[11px] text-sqysh-subtle ml-auto shrink-0 transition-colors duration-200 group-hover:text-brand-green">
                    ({groupCount(g)}) ↵
                  </span>
                </button>
              ))}
              <button
                onClick={() => pickGroup(null)}
                className="group w-full flex items-center gap-3 px-4 py-4 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2 border-b border-sqysh-border"
              >
                <span className="font-mono text-sm text-brand-purple">$</span>
                <span className="font-mono text-sm text-sqysh-text">
                  sqysh search --all
                </span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                  show everything ({catalog.length}) ↵
                </span>
              </button>
              <Link
                href="/"
                className="group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2"
              >
                <span className="font-mono text-sm text-brand-purple shrink-0">
                  $
                </span>
                <span className="font-mono text-sm text-sqysh-text whitespace-nowrap">
                  cd ~
                </span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto shrink-0 transition-colors duration-200 group-hover:text-brand-green">
                  back home ↵
                </span>
              </Link>
            </div>
          )}

          {/* ════ LEVEL 2: TYPE ════ */}
          {phase === "type" && group && (
            <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
              {typesInGroup(group).map((t) => (
                <button
                  key={t}
                  onClick={() => pickType(t)}
                  className="group w-full flex items-center gap-3 px-4 py-4 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2 border-b border-sqysh-border"
                >
                  <span className="font-mono text-sm text-brand-purple shrink-0">
                    $
                  </span>
                  <span className="font-mono text-[clamp(12px,3.6vw,14px)] text-sqysh-text whitespace-nowrap">
                    sqysh search --type={t.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                  <span className="font-mono text-[11px] text-sqysh-subtle ml-auto shrink-0 transition-colors duration-200 group-hover:text-brand-green">
                    ({typeCount(group, t)}) ↵
                  </span>
                </button>
              ))}
              <button
                onClick={() => setPhase("group")}
                className="group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2"
              >
                <span className="font-mono text-sm text-brand-purple shrink-0">
                  $
                </span>
                <span className="font-mono text-sm text-sqysh-text whitespace-nowrap">
                  cd ..
                </span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto shrink-0 transition-colors duration-200 group-hover:text-brand-green">
                  back ↵
                </span>
              </button>
            </div>
          )}

          {/* ════ LEVEL 3: BROWSE (versions) ════ */}
          {phase === "browse" && (
            <>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-muted mb-3 shrink-0 self-start">
                $ sqysh search {type ? `--type=${type.toLowerCase()}` : "--all"}{" "}
                · {visible.length} package{visible.length === 1 ? "" : "s"}
              </p>

              <ul className="w-full flex flex-col gap-3 list-none m-0 p-0 overflow-y-auto min-h-0 flex-1 pr-1 scrollbar-thin">
                {visible.map((card) => (
                  <ShopCard key={card.slug} card={card} />
                ))}
              </ul>

              <div className="w-full shrink-0 pt-3">
                <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setPhase(group ? "type" : "group")}
                    className="group w-full flex items-center gap-3 px-4 py-3.5 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2"
                  >
                    <span className="font-mono text-sm text-brand-purple">
                      $
                    </span>
                    <span className="font-mono text-sm text-sqysh-text">
                      cd ..
                    </span>
                    <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                      back ↵
                    </span>
                  </button>
                  <Link
                    href="/"
                    className="group w-full flex items-center gap-3 px-4 py-3.5 transition-colors duration-200 hover:bg-sqysh-surface-2"
                  >
                    <span className="font-mono text-sm text-brand-purple">
                      $
                    </span>
                    <span className="font-mono text-sm text-sqysh-text">
                      cd ~
                    </span>
                    <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                      back home ↵
                    </span>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
};
