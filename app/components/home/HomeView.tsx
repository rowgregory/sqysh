import Link from "next/link";
import { SqyshMascot } from "../SqyshMascot";
import { View } from "../../types/home.types";
import { useRef, useState } from "react";
import { boopLines } from "../../lib/constants/home.constants";
import { TopSpeechBubble } from "../TopSpeechBubble";

type HomeCommand = {
  command: string;
  hint: string;
} & ({ kind: "view"; view: View } | { kind: "link"; href: string });

const HOME_COMMANDS: HomeCommand[] = [
  {
    kind: "view",
    view: "contact",
    command: "sqysh init",
    hint: "start a project",
  },
  {
    kind: "link",
    href: "/shop",
    command: "sqysh install",
    hint: "browse the shop",
  },
  {
    kind: "link",
    href: "/arcade",
    command: "sqysh arcade",
    hint: "play some games",
  },
  {
    kind: "view",
    view: "work",
    command: "sqysh ls --work",
    hint: "view projects",
  },
];

export function HomeView({ go }: { go: (view: View) => void }) {
  const [bubbleText, setBubbleText] = useState("Looking to get Sqysh'd?");
  const boopCountRef = useRef(0);
  const bubbleResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onBoop = () => {
    const line =
      boopLines[Math.min(boopCountRef.current, boopLines.length - 1)];
    boopCountRef.current += 1;
    setBubbleText(line);

    if (bubbleResetRef.current) clearTimeout(bubbleResetRef.current);
    bubbleResetRef.current = setTimeout(() => {
      setBubbleText("Looking to get Sqysh'd?");
      boopCountRef.current = 0;
    }, 2500);
  };

  return (
    <div
      key="home"
      className="flex flex-col items-center w-full max-w-sm max-h-full"
    >
      {/* Speech bubble */}
      <TopSpeechBubble text={bubbleText} />

      {/* Mascot */}
      <SqyshMascot onBoop={onBoop} />

      {/* Cta Commands */}
      <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
        {HOME_COMMANDS.map((cmd) => {
          const rowClass = `group w-full flex items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-sqysh-surface-2`;

          const inner = (
            <>
              <span className="font-mono text-sm text-brand-purple">$</span>
              <span className="font-mono text-sm text-sqysh-text">
                {cmd.command}
              </span>
              <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                {cmd.hint} ↵
              </span>
            </>
          );

          return cmd.kind === "link" ? (
            <Link key={cmd.command} href={cmd.href} className={rowClass}>
              {inner}
            </Link>
          ) : (
            <button
              key={cmd.command}
              onClick={() => go(cmd.view)}
              className={`${rowClass} bg-transparent border-none cursor-pointer`}
            >
              {inner}
            </button>
          );
        })}
      </div>
    </div>
  );
}
