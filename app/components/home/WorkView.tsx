import { View } from "@/app/types/home.types";
import { useState } from "react";
import { Typewriter } from "../common/TypeWriter";
import { SqyshMascot } from "../SqyshMascot";
import { WORK } from "@/app/lib/constants/home.constants";

export function WorkView({ go }: { go: (view: View) => void }) {
  const [i, setI] = useState(0);
  const p = WORK[i];
  const atStart = i === 0;
  const atEnd = i === WORK.length - 1;

  const prev = () => !atStart && setI((n) => n - 1);
  const next = () => !atEnd && setI((n) => n + 1);

  const actions = [
    {
      cmd: "next",
      hint: `${i + 1} of ${WORK.length} →`,
      onClick: next,
      disabled: atEnd,
    },
    {
      cmd: "prev",
      hint: "←",
      onClick: prev,
      disabled: atStart,
    },
    {
      cmd: "cd ~",
      hint: "back home ↵",
      onClick: () => go("home"),
      disabled: false,
    },
  ] as const;

  return (
    <div
      key="work"
      className="w-full max-w-sm flex flex-col items-center max-h-full min-h-0"
    >
      <SqyshMascot size={90} />
      {/* Mascot guide + his narration */}
      <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mb-3 shrink-0 min-h-14 flex items-center">
        <p className="font-mono text-sm text-brand-green">
          <Typewriter key={p.name} sentence={p.blurb} speed={18} cursor />
        </p>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
      </div>

      {/* Current project card */}
      <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl px-4 py-4 mt-3 flex items-center justify-between">
        <div className="min-w-0">
          <span className="font-sans font-semibold text-sm text-sqysh-text block truncate">
            {p.name}
          </span>
          <span className="font-body text-xs text-sqysh-muted">{p.desc}</span>
        </div>
        {p.intro ? (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-purple/70 shrink-0 ml-3">
            // background
          </span>
        ) : p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-sqysh-subtle hover:text-brand-green transition-colors shrink-0 ml-3 no-underline"
          >
            open ↗
          </a>
        ) : (
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-sqysh-subtle border border-sqysh-border rounded-full px-2 py-0.5 shrink-0 ml-3">
            sunsetted
          </span>
        )}
      </div>

      {/* Terminal pager */}
      <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden mt-3">
        {actions.map((row, idx, rows) => (
          <button
            key={row.cmd}
            onClick={row.onClick}
            disabled={row.disabled}
            className={`group w-full flex items-center gap-3 px-4 py-3.5 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2 disabled:opacity-30 disabled:cursor-default${
              idx < rows.length - 1 ? " border-b border-sqysh-border" : ""
            }`}
          >
            <span className="font-mono text-sm text-brand-purple">$</span>
            <span className="font-mono text-sm text-sqysh-text">{row.cmd}</span>
            <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
              {row.hint}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
