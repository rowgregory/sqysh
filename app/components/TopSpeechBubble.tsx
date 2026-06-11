import { Typewriter } from "./common/TypeWriter";

export function TopSpeechBubble({ text }: { text: string }) {
  return (
    <div className="relative bg-sqysh-surface border border-sqysh-border rounded-2xl px-5 py-2.5 mb-3 shrink-0">
      <p className="font-mono text-sm text-brand-green">
        <Typewriter sentence={text} speed={24} cursor />
      </p>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-sqysh-surface border-r border-b border-sqysh-border" />
    </div>
  );
}
