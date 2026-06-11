"use client";

import { useEffect, useRef } from "react";

const mark = (eyes: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 250">` +
      `<path d="M 30 100 C 30 50, 70 30, 120 30 C 170 30, 210 50, 210 100 C 210 130, 205 155, 195 175 C 200 200, 180 222, 161 200 C 154 226, 130 228, 122 202 C 114 228, 90 226, 83 200 C 64 222, 40 200, 45 175 C 35 155, 30 130, 30 100 Z" fill="#a6ff4d"/>` +
      eyes +
      `</svg>`,
  )}`;

const OPEN = mark(
  `<ellipse cx="85" cy="105" rx="13" ry="17" fill="#0F1115"/>` +
    `<ellipse cx="155" cy="105" rx="13" ry="17" fill="#0F1115"/>` +
    `<ellipse cx="82" cy="99" rx="3" ry="4.5" fill="#FFFFFF"/>` +
    `<ellipse cx="152" cy="99" rx="3" ry="4.5" fill="#FFFFFF"/>`,
);

const CLOSED = mark(
  `<path d="M 72 107 Q 85 114 98 107" stroke="#0F1115" stroke-width="6" fill="none" stroke-linecap="round"/>` +
    `<path d="M 142 107 Q 155 114 168 107" stroke="#0F1115" stroke-width="6" fill="none" stroke-linecap="round"/>`,
);

export const AnimatedFavicon = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = OPEN;

    const blink = () => {
      if (!document.hidden) {
        link!.href = CLOSED;
        timeoutRef.current = setTimeout(() => {
          link!.href = OPEN;
          schedule();
        }, 160);
      } else {
        schedule(); // tab hidden — skip the swap, just reschedule
      }
    };

    const schedule = () => {
      timeoutRef.current = setTimeout(blink, 3000 + Math.random() * 3000);
    };
    schedule();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      link!.href = OPEN;
    };
  }, []);

  return null;
};
