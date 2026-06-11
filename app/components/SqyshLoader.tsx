"use client";

// ─── SqyshLoader ──────────────────────────────────────────────────────────────
// Animated loading state matching the flat Sqysh mark:
// - 4 scalloped tentacle lobes (exact curves from the mark) sway subtly
// - Eyes look left/right, then blink
// - Whole body bobs gently
// Usage: <SqyshLoader />  or  <SqyshLoader size={100} label="deploying" />

export const SqyshLoader = ({
  size = 140,
  label = "loading",
}: {
  size?: number;
  label?: string;
}) => (
  <div className="flex flex-col items-center gap-2.5">
    <style>{`
      .sq-loader .tent {
        transform-box: fill-box;
        transform-origin: 50% 10%;
        animation: sq-sway 1.3s ease-in-out infinite;
      }
      .sq-loader .t1 { animation-delay: 0s; }
      .sq-loader .t2 { animation-delay: 0.16s; }
      .sq-loader .t3 { animation-delay: 0.32s; }
      .sq-loader .t4 { animation-delay: 0.48s; }
      .sq-loader .eyes {
        transform-box: fill-box;
        transform-origin: 50% 50%;
        animation: sq-blink 3.2s infinite;
      }
      .sq-loader .pupils { animation: sq-look 3.2s ease-in-out infinite; }
      .sq-loader .bod { animation: sq-bob 2.2s ease-in-out infinite; }

      @keyframes sq-sway {
        0%, 100% { transform: rotate(-3.5deg) scaleY(1); }
        50% { transform: rotate(3.5deg) scaleY(1.06); }
      }
      @keyframes sq-blink {
        0%, 88%, 100% { transform: scaleY(1); }
        92%, 96% { transform: scaleY(0.06); }
      }
      @keyframes sq-look {
        0%, 18% { transform: translateX(0); }
        28%, 46% { transform: translateX(-7px); }
        56%, 78% { transform: translateX(7px); }
        88%, 100% { transform: translateX(0); }
      }
      @keyframes sq-bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      .sq-dots span { animation: sq-dot 1.2s infinite; opacity: 0; }
      .sq-dots span:nth-child(2) { animation-delay: 0.2s; }
      .sq-dots span:nth-child(3) { animation-delay: 0.4s; }
      @keyframes sq-dot {
        0%, 60%, 100% { opacity: 0; }
        30% { opacity: 1; }
      }

      @media (prefers-reduced-motion: reduce) {
        .sq-loader .tent, .sq-loader .eyes, .sq-loader .pupils, .sq-loader .bod {
          animation: none;
        }
      }
    `}</style>

    <svg
      className="sq-loader"
      width={size}
      height={size * 1.08}
      viewBox="0 0 240 258"
      role="status"
      aria-label={label}
    >
      <g className="bod">
        {/* Tentacle lobes — exact curve segments from the mark, tucked under the dome */}
        <g className="tent t1">
          <path
            d="M 45 175 C 40 200, 64 222, 83 200 C 87 184, 87 166, 85 150 L 52 150 C 46 158, 45 166, 45 175 Z"
            fill="#A6FF4D"
          />
        </g>
        <g className="tent t2">
          <path
            d="M 83 200 C 90 226, 114 228, 122 202 C 125 185, 125 167, 123 150 L 82 150 C 80 167, 80 184, 83 200 Z"
            fill="#A6FF4D"
          />
        </g>
        <g className="tent t3">
          <path
            d="M 122 202 C 130 228, 154 226, 161 200 C 163 184, 163 167, 161 150 L 121 150 C 119 167, 119 185, 122 202 Z"
            fill="#A6FF4D"
          />
        </g>
        <g className="tent t4">
          <path
            d="M 161 200 C 180 222, 200 200, 195 175 C 195 166, 193 158, 188 150 L 159 150 C 157 166, 157 184, 161 200 Z"
            fill="#A6FF4D"
          />
        </g>

        {/* Body dome */}
        <path
          d="M 30 100 C 30 50, 70 30, 120 30 C 170 30, 210 50, 210 100 C 210 128, 206 152, 197 170 C 150 184, 90 184, 43 170 C 34 152, 30 128, 30 100 Z"
          fill="#A6FF4D"
        />

        {/* Eyes */}
        <g className="eyes">
          <g className="pupils">
            <ellipse cx="85" cy="105" rx="13" ry="17" fill="#0F1115" />
            <ellipse cx="155" cy="105" rx="13" ry="17" fill="#0F1115" />
            <ellipse cx="82" cy="99" rx="3" ry="4.5" fill="#FFFFFF" />
            <ellipse cx="152" cy="99" rx="3" ry="4.5" fill="#FFFFFF" />
          </g>
        </g>
      </g>
    </svg>

    <p className="sq-dots font-mono text-xs text-sqysh-muted m-0">
      {label}
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </p>
  </div>
);
