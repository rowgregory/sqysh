"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

// ─── SqyshMascot ──────────────────────────────────────────────────────────────
// The animated home-view Sqysh.
// - Idle: tentacle sway, body bob, periodic blink
// - Desktop (pointer: fine): pupils track the cursor
// - Mobile: tap to boop — quick squash + excited wiggle burst
// Usage: <SqyshMascot size={130} />

const subscribeFinePointer = (cb: () => void) => {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
};

const useFinePointer = () =>
  useSyncExternalStore(
    subscribeFinePointer,
    () => window.matchMedia("(pointer: fine)").matches, // client
    () => false, // server snapshot
  );

export const chirp = (
  t: number,
  freq: number,
  rise: number,
  vol: number,
  dur: number,
  sparkle = false,
  ctx: any,
) => {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, t);
  osc.frequency.exponentialRampToValueAtTime(freq * rise, t + dur * 0.65);

  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(vol, t + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);

  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);

  if (sparkle) {
    const sp = ctx.createOscillator();
    const spGain = ctx.createGain();
    sp.type = "triangle";
    sp.frequency.setValueAtTime(freq * 2, t);
    sp.frequency.exponentialRampToValueAtTime(freq * 3.2, t + dur * 0.65);
    spGain.gain.setValueAtTime(0.0001, t);
    spGain.gain.exponentialRampToValueAtTime(vol * 0.3, t + 0.012);
    spGain.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.75);
    sp.connect(spGain).connect(ctx.destination);
    sp.start(t);
    sp.stop(t + dur);
  }
};

export const playBoop = (audioCtxRef: any) => {
  const Ctx = window.AudioContext;
  if (!Ctx) return;
  audioCtxRef.current ??= new Ctx();
  const ctx = audioCtxRef.current;
  if (ctx.state === "suspended") ctx.resume();

  const now = ctx.currentTime;
  const base = 520 + Math.random() * 120;

  // One chirp — reused for both notes

  // Note 1: "bu" — short, low, quiet, barely rises
  chirp(now, base * 0.75, 1.15, 0.06, 0.07, false, ctx);

  // Note 2: "bwip!" — higher, louder, big rise, sparkle on top
  chirp(now + 0.085, base * 1.25, 1.9, 0.1, 0.13, true, ctx);
};

export const SqyshMascot = ({
  size = 130,
  onBoop,
}: {
  size?: number;
  onBoop?: () => void;
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pupilsRef = useRef<SVGGElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const boopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tracking = useFinePointer();
  const gradId = useId();
  const [booped, setBooped] = useState(false);
  const glanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!tracking) return;

    const measure = () => {
      rectRef.current = svgRef.current?.getBoundingClientRect() ?? null;
    };
    measure();

    const onMove = (e: PointerEvent) => {
      const r = rectRef.current;
      const pupils = pupilsRef.current;
      if (!r || !pupils) return;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.42;
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width * 1.2)));
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height * 1.2)));
      pupils.style.transform = `translate(${dx * 7}px, ${dy * 4}px)`;
    };

    const onTap = (e: PointerEvent) => {
      const svg = svgRef.current;
      const pupils = pupilsRef.current;
      if (!svg || !pupils) return;
      if (svg.contains(e.target as Node)) return; // tapping Sqysh himself = boop, not glance

      const r = svg.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.42;
      const dx = Math.max(
        -1,
        Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)),
      );
      const dy = Math.max(
        -1,
        Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)),
      );

      pupils.classList.add("glancing");
      pupils.style.transform = `translate(${dx * 7}px, ${dy * 4}px)`;

      if (glanceTimeoutRef.current) clearTimeout(glanceTimeoutRef.current);
      glanceTimeoutRef.current = setTimeout(() => {
        pupils.style.transform = "";
        pupils.classList.remove("glancing");
      }, 900);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("pointerdown", onTap);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("pointerdown", onTap);
      if (glanceTimeoutRef.current) clearTimeout(glanceTimeoutRef.current);
    };
  }, [tracking]);

  useEffect(() => {
    if (!tracking) return;

    const onClick = (e: PointerEvent) => {
      const svg = svgRef.current;
      if (!svg || svg.contains(e.target as Node)) return;
      svg.classList.add("startled");
      if (startleTimeoutRef.current) clearTimeout(startleTimeoutRef.current);
      startleTimeoutRef.current = setTimeout(
        () => svg.classList.remove("startled"),
        400,
      );
    };

    window.addEventListener("pointerdown", onClick);
    return () => {
      window.removeEventListener("pointerdown", onClick);
      if (startleTimeoutRef.current) clearTimeout(startleTimeoutRef.current);
    };
  }, [tracking]);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Boop with cleanup
  const boop = () => {
    if (booped) return;
    setBooped(true);
    playBoop(audioCtxRef);
    onBoop?.();
    boopTimeoutRef.current = setTimeout(() => setBooped(false), 700);
  };

  useEffect(() => {
    return () => {
      if (boopTimeoutRef.current) clearTimeout(boopTimeoutRef.current);
    };
  }, []);

  return (
    <button
      onClick={boop}
      aria-label="Sqysh says hi"
      className="bg-transparent border-none p-0 cursor-pointer select-none"
    >
      <style>{`
        .sq-mascot .tent {
          transform-box: fill-box;
          transform-origin: 50% 10%;
          animation: sqm-sway 1.6s ease-in-out infinite;
        }
        .sq-mascot .t1 { animation-delay: 0s; }
        .sq-mascot .t2 { animation-delay: 0.18s; }
        .sq-mascot .t3 { animation-delay: 0.36s; }
        .sq-mascot .t4 { animation-delay: 0.54s; }
        .sq-mascot .eyes {
          transform-box: fill-box;
          transform-origin: 50% 50%;
          animation: sqm-blink 4s infinite;
        }
        .sq-mascot .pupils { transition: transform 0.15s ease-out; }
        .sq-mascot .pupils.glancing { animation: none; }
        .sq-mascot:not(.tracking) .pupils { animation: sqm-look 5s ease-in-out infinite; }
        .sq-mascot .bod { animation: sqm-bob 2.6s ease-in-out infinite; }

        .sq-mascot.startled .eyes { animation: sqm-startle 0.4s ease-out; }

        /* Boop reaction — squash + excited burst */
        .sq-mascot.booped .bod { animation: sqm-boop 0.7s ease-out; }
        .sq-mascot.booped .tent { animation-duration: 0.4s; }

        @keyframes sqm-startle {
          0% { transform: scaleY(1); }
          20% { transform: scaleY(0.06); }  /* quick blink */
          45% { transform: scaleY(1.12); } /* eyes pop wide */
          100% { transform: scaleY(1); }
        }

        @keyframes sqm-sway {
          0%, 100% { transform: rotate(-3deg) scaleY(1); }
          50% { transform: rotate(3deg) scaleY(1.05); }
        }
        @keyframes sqm-blink {
          0%, 90%, 100% { transform: scaleY(1); }
          93%, 97% { transform: scaleY(0.06); }
        }
        @keyframes sqm-look {
          0%, 22% { transform: translateX(0); }
          32%, 48% { transform: translateX(-7px); }
          58%, 80% { transform: translateX(7px); }
          90%, 100% { transform: translateX(0); }
        }
        @keyframes sqm-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes sqm-boop {
          0% { transform: scale(1, 1); }
          25% { transform: scale(1.12, 0.85); }
          50% { transform: scale(0.94, 1.08); }
          75% { transform: scale(1.04, 0.97); }
          100% { transform: scale(1, 1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .sq-mascot .tent, .sq-mascot .eyes, .sq-mascot .pupils, .sq-mascot .bod {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <svg
        ref={svgRef}
        className={`sq-mascot ${booped ? "booped" : ""} ${tracking ? "tracking" : ""}`}
        width={size}
        height={size * 1.08}
        viewBox="0 0 240 258"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="170"
            y2="170"
            spreadMethod="repeat"
          >
            <stop offset="0" stopColor="#A6FF4D" />
            <stop offset="0.5" stopColor="#37E1C2" />
            <stop offset="1" stopColor="#A6FF4D" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="0 0"
              to="170 170"
              dur="5s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        <g
          className="bod"
          style={{ transformBox: "fill-box", transformOrigin: "50% 60%" }}
        >
          {/* Tentacle lobes — rounded sides, exact bottom curves from the mark */}
          <g className="tent t1">
            <path
              d="M 45 175 C 40 200, 64 222, 83 200 C 87 184, 87 166, 85 150 L 52 150 C 46 158, 45 166, 45 175 Z"
              fill={`url(#${gradId})`}
            />
          </g>
          <g className="tent t2">
            <path
              d="M 83 200 C 90 226, 114 228, 122 202 C 125 185, 125 167, 123 150 L 82 150 C 80 167, 80 184, 83 200 Z"
              fill={`url(#${gradId})`}
            />
          </g>
          <g className="tent t3">
            <path
              d="M 122 202 C 130 228, 154 226, 161 200 C 163 184, 163 167, 161 150 L 121 150 C 119 167, 119 185, 122 202 Z"
              fill={`url(#${gradId})`}
            />
          </g>
          <g className="tent t4">
            <path
              d="M 161 200 C 180 222, 200 200, 195 175 C 195 166, 193 158, 188 150 L 159 150 C 157 166, 157 184, 161 200 Z"
              fill={`url(#${gradId})`}
            />
          </g>

          {/* Body dome */}
          <path
            d="M 30 100 C 30 50, 70 30, 120 30 C 170 30, 210 50, 210 100 C 210 128, 206 152, 197 170 C 150 184, 90 184, 43 170 C 34 152, 30 128, 30 100 Z"
            fill={`url(#${gradId})`}
          />

          {/* Eyes */}
          <g className="eyes">
            <g ref={pupilsRef} className="pupils">
              <ellipse cx="85" cy="105" rx="13" ry="17" fill="#0F1115" />
              <ellipse cx="155" cy="105" rx="13" ry="17" fill="#0F1115" />
              <ellipse cx="82" cy="99" rx="3" ry="4.5" fill="#FFFFFF" />
              <ellipse cx="152" cy="99" rx="3" ry="4.5" fill="#FFFFFF" />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};
