import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Picture from "../common/Picture";

export function Lightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState("center");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // page can't scroll behind it
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const toggleZoom = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation(); // don't close when tapping the image
    if (scale === 1) {
      const r = e.currentTarget.getBoundingClientRect();
      setOrigin(
        `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`,
      );
      setScale(2.5);
    } else {
      setScale(1);
    }
  };

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-zoom-out"
    >
      <div
        onClick={toggleZoom}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: origin,
          transition: "transform 0.2s",
        }}
        className={`relative w-[90vw] h-[90vh] ${scale === 1 ? "cursor-zoom-in" : "cursor-zoom-out"}`}
      >
        <Picture src={src} alt="" fill className="object-contain" />
      </div>
      <span className="absolute top-4 right-5 font-mono text-xs text-sqysh-subtle">
        esc ✕
      </span>
    </div>,
    document.body,
  );
}
