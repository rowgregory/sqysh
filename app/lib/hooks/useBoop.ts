import { useRef, useState } from "react";

export function useBoop(lines: string[], idleText: string) {
  const [text, setText] = useState(idleText);
  const countRef = useRef(0);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onBoop = () => {
    setText(lines[Math.min(countRef.current, lines.length - 1)]);
    countRef.current += 1;
    if (resetRef.current) clearTimeout(resetRef.current);
    resetRef.current = setTimeout(() => {
      setText(idleText);
      countRef.current = 0;
    }, 2500);
  };

  return { text, onBoop };
}
