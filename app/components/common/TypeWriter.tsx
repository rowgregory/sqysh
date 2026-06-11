import { useEffect, useState } from "react";

export const Typewriter = ({
  sentence,
  speed = 24,
  className,
  cursor = false,
}: {
  sentence: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}) => {
  const chars = Array.from(sentence);
  const [count, setCount] = useState(0);

  // Reset instantly when the sentence changes (render-phase, no flash)
  const [prevSentence, setPrevSentence] = useState(sentence);
  if (prevSentence !== sentence) {
    setPrevSentence(sentence);
    setCount(0);
  }

  useEffect(() => {
    const total = Array.from(sentence).length;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= total) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [sentence, speed]);

  const done = count >= chars.length;

  return (
    <span className={className}>
      {chars.slice(0, count).join("")}
      {cursor && !done && (
        <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-0.5" />
      )}
    </span>
  );
};
