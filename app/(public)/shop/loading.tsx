"use client";

import { SlimNav } from "@/app/components/SlimNav";
import { SqyshMascot } from "@/app/components/SqyshMascot";

export default function ShopLoading() {
  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      {/* ── Slim nav ── */}
      <SlimNav />

      <div className="flex-1 flex flex-col items-center px-5 py-2 min-h-0">
        <div className="w-full max-w-sm flex flex-col items-center min-h-0 max-h-full">
          <SqyshMascot size={90} />
        </div>
      </div>
    </main>
  );
}
