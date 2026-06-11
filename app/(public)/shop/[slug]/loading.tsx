import { SlimNav } from "@/app/components/SlimNav";
import { SqyshMascot } from "@/app/components/SqyshMascot";

export default function ShopSlugLoading() {
  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      {/* ── Slim nav ── */}
      <SlimNav />

      <div className="flex-1 flex flex-col items-center px-5 py-2 min-h-0">
        <div className="w-full max-w-sm flex flex-col max-h-full min-h-0 overflow-y-auto scrollbar-thin pr-1">
          {/* command echo header */}
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-muted mb-3 mt-4 shrink-0 self-start">
            $ sqysh info
          </p>

          {/* mascot commentary — compact, out of the buy flow */}
          <div className="flex items-center gap-3 mb-4 shrink-0 self-start">
            <SqyshMascot size={48} />
          </div>
        </div>
      </div>
    </main>
  );
}
