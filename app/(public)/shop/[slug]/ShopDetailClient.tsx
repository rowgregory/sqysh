"use client";

import { useState } from "react";
import Link from "next/link";
import { SqyshMark } from "@/app/components/SqyshMark";
import type { CatalogCard } from "@/app/types/shop.types";
import Picture from "@/app/components/common/Picture";
import { cartActions } from "@/app/redux/features/cartSlice";
import { useAppDispatch } from "@/app/redux/store";
import { Lightbox } from "@/app/components/shop/LightBox";
import { SlimNav } from "@/app/components/SlimNav";
import { Footer } from "@/app/components/Footer";
import { useBoop } from "@/app/lib/hooks/useBoop";
import { SqyshMascot } from "@/app/components/SqyshMascot";
import { Typewriter } from "@/app/components/common/TypeWriter";
import {
  productBoopLinesAccessory,
  productBoopLinesClothing,
} from "@/app/lib/constants/shop.constants";

export function ShopDetailClient({ card }: { card: CatalogCard }) {
  const dispatch = useAppDispatch();
  const boopLines =
    card.group === "clothing"
      ? productBoopLinesClothing
      : productBoopLinesAccessory;

  const greet = useBoop(boopLines, "good eye.");

  const [colorway, setColorway] = useState(card.colorways[0]);
  const sizes = colorway.variants
    .map((v) => v.size)
    .filter(Boolean) as string[];
  const [size, setSize] = useState<string | null>(sizes[0] ?? null);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [added, setAdded] = useState(false);

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
    setTimeout(() => setAdded(false), 1500);
  };

  const hasSpecs = card.description || card.material || card.brand;

  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      {/* ── Slim nav ── */}
      <SlimNav />

      <div className="flex-1 flex flex-col items-center px-5 py-2 min-h-0">
        <div className="w-full max-w-sm flex flex-col max-h-full min-h-0 overflow-y-auto scrollbar-thin pr-1">
          {/* command echo header */}
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-muted mb-3 mt-4 shrink-0 self-start">
            $ sqysh info {card.slug}
          </p>

          {/* mascot commentary — compact, out of the buy flow */}
          <div className="flex items-center gap-3 mb-4 shrink-0 self-start">
            <SqyshMascot onBoop={greet.onBoop} size={48} />
            <div className="relative bg-sqysh-surface border border-sqysh-border rounded-xl px-4 py-2">
              <p className="font-mono text-xs text-brand-green">
                <Typewriter sentence={greet.text} speed={24} cursor />
              </p>
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 rotate-45 bg-sqysh-surface border-l border-b border-sqysh-border" />
            </div>
          </div>

          <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden shrink-0">
            {/* main mockup — click to zoom */}
            <button
              onClick={() => images[active] && setZoom(true)}
              className="w-full h-72 flex items-center justify-center bg-[#303039] p-6 cursor-zoom-in"
              aria-label="Zoom image"
            >
              {images[active] ? (
                <Picture
                  src={images[active]}
                  alt={`${card.name} — ${colorway.label}`}
                  className="max-h-full w-auto object-contain"
                />
              ) : (
                <SqyshMark size={72} color="#2a2a32" />
              )}
            </button>

            {/* thumbnail strip */}
            {images.length > 1 && (
              <div className="flex gap-2 px-3 py-2 overflow-x-auto scrollbar-thin border-t border-sqysh-border">
                {images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActive(i)}
                    className={`w-14 h-14 shrink-0 rounded border flex items-center justify-center p-1 bg-sqysh-surface-2 transition-colors ${
                      i === active
                        ? "border-brand-purple"
                        : "border-sqysh-border"
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

            <div className="px-4 py-4">
              {/* name + price */}
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-base text-brand-green truncate">
                  {card.slug}@1.0.0
                </span>
                <span className="font-mono text-base text-sqysh-text shrink-0">
                  ${variant.price.toFixed(0)}
                </span>
              </div>

              <h1 className="font-sans font-bold text-xl tracking-tight text-sqysh-text mt-1">
                {card.name}
              </h1>

              {/* colorways */}
              {card.colorways.length > 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
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

              {/* sizes */}
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

              {/* description */}
              {card.description && (
                <p className="font-body text-sm text-sqysh-muted leading-relaxed mt-4">
                  {card.description}
                </p>
              )}

              {/* spec block — README.md style */}
              {hasSpecs && (
                <div className="mt-4 pt-4 border-t border-sqysh-border">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sqysh-subtle mb-2">
                    # specs
                  </p>
                  <dl className="font-mono text-xs space-y-1.5">
                    {card.brand && (
                      <div className="flex justify-between gap-3">
                        <dt className="text-sqysh-subtle">brand</dt>
                        <dd className="text-sqysh-text text-right">
                          {card.brand}
                          {card.model ? ` ${card.model}` : ""}
                        </dd>
                      </div>
                    )}
                    {card.material && (
                      <div className="flex justify-between gap-3">
                        <dt className="text-sqysh-subtle">material</dt>
                        <dd className="text-sqysh-text text-right">
                          {card.material}
                        </dd>
                      </div>
                    )}
                    {card.group === "clothing" && (
                      <div className="flex justify-between gap-3">
                        <dt className="text-sqysh-subtle">back print</dt>
                        <dd className="text-sqysh-text text-right">
                          sqysh wordmark
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}
            </div>

            {/* add to cart */}
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
          </div>

          {/* nav */}
          <div className="w-full shrink-0 pt-3">
            <div className="w-full bg-sqysh-surface border border-sqysh-border rounded-xl overflow-hidden">
              <Link
                href="/shop"
                className="group w-full flex items-center gap-3 px-4 py-3.5 transition-colors duration-200 hover:bg-sqysh-surface-2"
              >
                <span className="font-mono text-sm text-brand-purple">$</span>
                <span className="font-mono text-sm text-sqysh-text">cd ..</span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                  back to shop ↵
                </span>
              </Link>
              <Link
                href="/"
                className="group w-full flex items-center gap-3 px-4 py-3.5 transition-colors duration-200 hover:bg-sqysh-surface-2"
              >
                <span className="font-mono text-sm text-brand-purple">$</span>
                <span className="font-mono text-sm text-sqysh-text">cd ~</span>
                <span className="font-mono text-[11px] text-sqysh-subtle ml-auto transition-colors duration-200 group-hover:text-brand-green">
                  back home ↵
                </span>
              </Link>
            </div>
          </div>

          {zoom && (
            <Lightbox src={images[active]} onClose={() => setZoom(false)} />
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
