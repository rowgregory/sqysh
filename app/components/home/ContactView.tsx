"use client";

import { createInquiry } from "@/app/lib/actions/inquiry/createInquiry";
import { View } from "@/app/types/home.types";
import { useRef, useState } from "react";
import { SqyshMascot } from "../SqyshMascot";
import { Typewriter } from "../common/TypeWriter";

type StepKey = "name" | "company" | "email" | "message";
type Answers = Partial<Record<StepKey, string>>;

const STEPS: {
  key: StepKey;
  prompt: (a: Answers) => string;
  placeholder: string;
  required: boolean;
  textarea?: boolean;
  validate?: (v: string) => string | null;
}[] = [
  {
    key: "name",
    prompt: () => "hey, i'm sqysh! who am i talking to?",
    placeholder: "your name",
    required: true,
  },
  {
    key: "company",
    prompt: (a) => `nice to meet you, ${a.name}. what company are you with?`,
    placeholder: "company — enter to skip",
    required: false,
  },
  {
    key: "email",
    prompt: () => "where should we send the reply?",
    placeholder: "email",
    required: true,
    validate: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "that email looks off",
  },
  {
    key: "message",
    prompt: () => "last one — what are we building?",
    placeholder: "the project, in your words",
    required: true,
    textarea: true,
  },
];

export const ContactView = ({ go }: { go: (view: View) => void }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const step = STEPS[stepIndex];
  const done = stepIndex >= STEPS.length;

  const advance = () => {
    const value = draft.trim();
    if (step.required && !value) {
      setError("this one's required");
      return;
    }
    const invalid = value && step.validate?.(value);
    if (invalid) {
      setError(invalid);
      return;
    }
    setAnswers((a) => ({ ...a, [step.key]: value }));
    setDraft("");
    setError(null);
    setStepIndex((i) => i + 1);
  };

  const back = () => {
    if (stepIndex === 0) return go("home");
    const prev = STEPS[stepIndex - 1];
    setDraft(answers[prev.key] ?? "");
    setError(null);
    setStepIndex((i) => i - 1);
  };

  const send = async () => {
    if (sending) return;
    setSending(true);
    const res = await createInquiry({
      name: answers.name ?? "",
      company: answers.company || undefined,
      email: answers.email ?? "",
      message: answers.message ?? "",
    });
    setSending(false);
    if (res.success) setSent(true);
    else setError(res.error);
  };

  // ── Sent ──
  if (sent) {
    return (
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        <SqyshMascot size={90} onBoop={() => {}} />
        <p className="font-mono text-sm text-brand-green mt-4 mb-6">
          <Typewriter
            sentence={`got it, ${answers.name}! talk soon.`}
            speed={24}
          />
        </p>
        <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden text-left">
          <button
            onClick={() => go("home")}
            className="group w-full flex items-center gap-3 px-4 py-4 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2"
          >
            <span className="font-mono text-sm text-brand-green">$</span>
            <span className="font-mono text-sm text-sqysh-text">cd ~</span>
            <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
              back home ↵
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm flex flex-col items-center">
      {/* Transcript of answered questions */}
      {stepIndex > 0 && (
        <div className="w-full font-mono text-[11px] text-sqysh-subtle mb-3 flex flex-col gap-0.5">
          {STEPS.slice(0, stepIndex).map((s) => (
            <p key={s.key} className="truncate">
              <span className="text-sqysh-muted">{s.key}:</span>{" "}
              {answers[s.key] || <span className="italic">skipped</span>}
            </p>
          ))}
        </div>
      )}

      {/* Sqysh asks */}
      <SqyshMascot size={90} />
      <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mt-3 mb-5 max-w-full">
        <p className="font-mono text-sm text-brand-green">
          <Typewriter
            sentence={done ? "ready to send?" : step.prompt(answers)}
            speed={24}
            cursor
          />
        </p>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
      </div>

      {/* Answer area */}
      <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
        {!done && (
          <form
            className="px-4 py-4"
            onSubmit={(e) => {
              e.preventDefault();
              advance();
            }}
          >
            {step.textarea ? (
              <textarea
                key={step.key}
                ref={(el) => {
                  inputRef.current = el;
                }}
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value);
                  setError(null);
                }}
                placeholder={step.placeholder}
                rows={4}
                autoFocus
                className="input-sqysh py-3 resize-none"
              />
            ) : (
              <input
                key={step.key}
                ref={(el) => {
                  inputRef.current = el;
                }}
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value);
                  setError(null);
                }}
                placeholder={step.placeholder}
                type={step.key === "email" ? "email" : "text"}
                inputMode={step.key === "email" ? "email" : "text"}
                autoComplete={
                  step.key === "email"
                    ? "email"
                    : step.key === "name"
                      ? "name"
                      : "organization"
                }
                autoFocus
                className="input-sqysh py-3"
              />
            )}
            {error && (
              <p className="font-mono text-xs text-sqysh-error mt-2">
                ! {error}
              </p>
            )}
          </form>
        )}

        {/* Terminal actions */}
        <div className={done ? "" : "border-t border-sqysh-border"}>
          {done ? (
            <button
              onClick={() => void send()}
              disabled={sending}
              className="group w-full flex items-center gap-3 px-4 py-4 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2 border-b border-sqysh-border disabled:opacity-50"
            >
              <span className="font-mono text-sm text-brand-green">$</span>
              <span className="font-mono text-sm text-sqysh-text">
                {sending ? "sending..." : "sqysh init --send"}
              </span>
              <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
                send it ↵
              </span>
            </button>
          ) : (
            <button
              onClick={advance}
              className="group w-full flex items-center gap-3 px-4 py-4 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2 border-b border-sqysh-border"
            >
              <span className="font-mono text-sm text-brand-green">$</span>
              <span className="font-mono text-sm text-sqysh-text">
                {step.required || draft.trim() ? "next" : "skip"}
              </span>
              <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
                {stepIndex + 1} / {STEPS.length} ↵
              </span>
            </button>
          )}
          <button
            onClick={back}
            className="group w-full flex items-center gap-3 px-4 py-4 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:bg-sqysh-surface-2"
          >
            <span className="font-mono text-sm text-brand-green">$</span>
            <span className="font-mono text-sm text-sqysh-text">cd ..</span>
            <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors duration-200">
              {stepIndex === 0 ? "back home" : "previous question"} ↵
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
