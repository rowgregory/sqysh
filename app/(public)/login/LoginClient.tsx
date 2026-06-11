"use client";

import { signIn, signOut } from "next-auth/react";
import { SqyshMascot } from "@/app/components/SqyshMascot";
import { SlimNav } from "@/app/components/SlimNav";
import { Typewriter } from "@/app/components/common/TypeWriter";
import { useBoop } from "@/app/lib/hooks/useBoop";

export const loginBoopLines = [
  "members only.",
  "you got the keys?",
  "prove you're greg.",
  "no badge, no entry.",
  "$ sudo let me in",
  "the octopus guards the gate.",
  "auth required, friend.",
  "nice try, but log in.",
];

export const pendingBoopLines = [
  "you're a sqyshling.",
  "access pending.",
  "not cleared for the bridge.",
  "so close, yet so unauthorized.",
  "the octopus doesn't know you yet.",
  "nice creds, wrong rank.",
  "$ whoami → sqyshling",
  "almost. not quite.",
];

export function LoginClient({ pendingEmail }: { pendingEmail?: string }) {
  const isPending = !!pendingEmail;

  const boop = useBoop(
    isPending ? pendingBoopLines : loginBoopLines,
    isPending ? "$ access denied" : "$ sqysh auth --login",
  );

  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      <SlimNav />

      <div className="flex-1 flex flex-col items-center justify-center px-5 min-h-0">
        <div className="w-full max-w-sm flex flex-col items-center">
          <p
            className={`font-mono text-sm tracking-[0.3em] uppercase mb-2 ${
              isPending ? "text-red-400" : "text-brand-purple"
            }`}
          >
            {isPending ? "access pending" : "admin"}
          </p>

          <SqyshMascot onBoop={boop.onBoop} size={90} />

          <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mt-3 mb-8 shrink-0">
            <p className="font-mono text-sm text-brand-green">
              <Typewriter sentence={boop.text} speed={24} cursor />
            </p>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-l border-t border-sqysh-border" />
          </div>

          {isPending ? (
            // ── Signed in, but not SUPER_USER ──
            <>
              <div className="w-full border border-sqysh-border bg-sqysh-surface px-4 py-4 mb-4">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle mb-1.5">
                  signed in as
                </p>
                <p className="font-mono text-sm text-sqysh-text break-all mb-3">
                  {pendingEmail}
                </p>
                <p className="font-body text-xs text-sqysh-muted leading-relaxed">
                  This account doesn&apos;t have dashboard access. If this is
                  you, grant your account the right role, then sign out and back
                  in.
                </p>
              </div>

              <button
                onClick={() => signOut({ redirectTo: "/login" })}
                className="group w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-sqysh-surface border border-sqysh-border rounded-xl cursor-pointer transition-colors hover:bg-sqysh-surface-2 hover:border-brand-green"
              >
                <span className="font-mono text-sm text-brand-purple">$</span>
                <span className="font-mono text-sm text-sqysh-text">
                  sign out
                </span>
              </button>
            </>
          ) : (
            // ── Not signed in ──
            <>
              <button
                onClick={() => signIn("google", { redirectTo: "/dashboard" })}
                className="group w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-sqysh-surface border border-sqysh-border rounded-xl cursor-pointer transition-colors hover:bg-sqysh-surface-2 hover:border-brand-green"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.89 2.68-6.62z"
                  />
                  <path
                    fill="#34A853"
                    d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.02-3.7H.96v2.34A9 9 0 009 18z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M3.98 10.72a5.4 5.4 0 010-3.44V4.94H.96a9 9 0 000 8.12l3.02-2.34z"
                  />
                  <path
                    fill="#EA4335"
                    d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.94l3.02 2.34C4.68 5.16 6.66 3.58 9 3.58z"
                  />
                </svg>
                <span className="font-mono text-sm text-sqysh-text">
                  continue with google
                </span>
              </button>

              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle mt-6">
                authorized accounts only
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
