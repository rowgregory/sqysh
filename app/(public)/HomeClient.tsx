import { useSearchParams } from "next/navigation";
import { View } from "../types/home.types";
import { VIEWS } from "../lib/constants/home.constants";
import { useState } from "react";
import { SlimNav } from "../components/SlimNav";
import { HomeView } from "../components/home/HomeView";
import { ContactView } from "../components/home/ContactView";
import { WorkView } from "../components/home/WorkView";

const isView = (v: string | null): v is View => VIEWS.includes(v as View);

export function HomeClient() {
  const searchParams = useSearchParams();
  const urlView = searchParams.get("view");
  const [view, setView] = useState<View>(isView(urlView) ? urlView : "home");

  const go = (v: View) => {
    setView(v);
    window.history.replaceState(null, "", v === "home" ? "/" : `/?view=${v}`);
  };
  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      {/* ── Slim nav ── */}
      <SlimNav go={go} />

      {/* ── Swappable center stage ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 min-h-0 overflow-hidden">
        {/* ── HOME ── */}
        {view === "home" && <HomeView go={go} />}

        {/* ── CONTACT ── */}
        {view === "contact" && <ContactView go={go} />}

        {/* ── WORK ── */}
        {view === "work" && <WorkView go={go} />}
      </div>

      {/* ── Footer strip ── */}
      <footer className="shrink-0 px-5 py-3 text-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle">
          Sqysh
        </span>
      </footer>
    </main>
  );
}
