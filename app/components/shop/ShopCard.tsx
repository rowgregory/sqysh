import { CatalogCard } from "@/app/types/shop.types";
import { useEffect, useRef, useState } from "react";
import Picture from "../common/Picture";
import { SqyshMark } from "../SqyshMark";
import { Lightbox } from "./LightBox";
import { cartActions } from "@/app/redux/features/cartSlice";
import { useAppDispatch } from "@/app/redux/store";
import Link from "next/link";

export function ShopCard({ card }: { card: CatalogCard }) {
  const dispatch = useAppDispatch();

  const [colorway, setColorway] = useState(card.colorways[0]);
  const sizes = colorway.variants
    .map((v) => v.size)
    .filter(Boolean) as string[];
  const [size, setSize] = useState<string | null>(sizes[0] ?? null);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [added, setAdded] = useState(false);
  const addedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const images = colorway.images?.length
    ? colorway.images
    : colorway.image
      ? [colorway.image]
      : [];
  const variant =
    colorway.variants.find((v) => v.size === size) ?? colorway.variants[0];

  const addToCart = () => {
    dispatch(
      cartActions.add({
        slug: card.slug,
        colorwayKey: colorway.key,
        size,
        qty: 1,
        name: card.name,
        colorwayLabel: colorway.label,
        price: variant.price,
        image: colorway.image,
      }),
    );
    setAdded(true);
    // reset the 5s timer each time (so re-adding restarts the window)
    if (addedTimer.current) clearTimeout(addedTimer.current);
    addedTimer.current = setTimeout(() => setAdded(false), 5000);
  };

  useEffect(() => {
    return () => {
      if (addedTimer.current) clearTimeout(addedTimer.current);
    };
  }, []);

  return (
    <li>
      <div className="bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
        {/* main mockup — click to zoom */}
        <button
          onClick={() => images[active] && setZoom(true)}
          className="w-full h-56 flex items-center justify-center bg-[#303039] p-4 cursor-zoom-in"
          aria-label="Zoom image"
        >
          {images[active] ? (
            <Picture
              src={images[active]}
              alt={`${card.name} — ${colorway.label}`}
              className="max-h-full w-auto object-contain"
            />
          ) : (
            <SqyshMark size={56} color="#2a2a32" />
          )}
        </button>

        {/* thumbnail strip — only if more than one mockup */}
        {images.length > 1 && (
          <div className="flex gap-2 px-3 py-2 overflow-x-auto scrollbar-thin border-t border-sqysh-border">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActive(i)}
                className={`w-12 h-12 shrink-0 rounded border flex items-center justify-center p-1 bg-sqysh-surface-2 transition-colors ${
                  i === active ? "border-brand-purple" : "border-sqysh-border"
                }`}
              >
                <Picture
                  src={img}
                  alt=""
                  className="max-h-full w-auto object-contain"
                />
              </button>
            ))}
          </div>
        )}

        <div className="px-4 py-3">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-mono text-sm text-brand-green truncate">
              {card.slug}@1.0.0
            </span>
            <span className="font-mono text-sm text-sqysh-text shrink-0">
              ${variant.price.toFixed(0)}
            </span>
          </div>

          {card.colorways.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {card.colorways.map((c) => (
                <button
                  key={c.key}
                  onClick={() => {
                    setColorway(c);
                    setActive(0);
                    const next = c.variants
                      .map((v) => v.size)
                      .filter(Boolean) as string[];
                    setSize(next[0] ?? null);
                  }}
                  className={`font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 border rounded transition-colors ${
                    c.key === colorway.key
                      ? "border-brand-purple text-brand-purple"
                      : "border-sqysh-border text-sqysh-subtle hover:text-sqysh-text"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}

          {sizes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 border rounded transition-colors ${
                    s === size
                      ? "border-brand-purple text-brand-purple"
                      : "border-sqysh-border text-sqysh-subtle hover:text-sqysh-text"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link
          href={`/shop/${card.slug}`}
          className="group w-full flex items-center gap-3 px-4 py-3.5 border-t border-sqysh-border transition-colors hover:bg-sqysh-surface-2"
        >
          <span className="font-mono text-sm text-brand-purple">$</span>
          <span className="font-mono text-sm text-sqysh-text">
            sqysh info {card.slug}
          </span>
          <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green transition-colors">
            details ↵
          </span>
        </Link>

        <button
          onClick={addToCart}
          className="group w-full flex items-center gap-3 px-4 py-3.5 border-t border-sqysh-border cursor-pointer transition-colors hover:bg-sqysh-surface-2"
        >
          <span className="font-mono text-sm text-brand-purple">$</span>
          <span className="font-mono text-sm text-sqysh-text">
            {added ? "added to cart ✓" : `sqysh add ${card.slug}`}
          </span>
          <span className="font-mono text-[11px] text-sqysh-subtle ml-auto group-hover:text-brand-green">
            {added ? "" : "add ↵"}
          </span>
        </button>

        {/* ← inline checkout affordance, appears after adding */}
        {added && (
          <Link
            href="/shop/cart"
            className="group w-full flex items-center gap-3 px-4 py-3.5 border-t border-brand-green/30 bg-brand-green/10 transition-colors hover:bg-brand-green/15"
          >
            <span className="font-mono text-sm text-brand-green">$</span>
            <span className="font-mono text-sm text-brand-green">
              sqysh checkout
            </span>
            <span className="font-mono text-[11px] text-brand-green/70 ml-auto group-hover:text-brand-green">
              view cart ↵
            </span>
          </Link>
        )}
      </div>
      {zoom && <Lightbox src={images[active]} onClose={() => setZoom(false)} />}
    </li>
  );
}
