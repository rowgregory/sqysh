"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export type CartLine = {
  slug: string;
  colorwayKey: string;
  size: string | null;
  qty: number;
  // display snapshot — NOT trusted for price; checkout re-resolves server-side
  name: string;
  colorwayLabel: string;
  price: number;
  image: string | null;
};

const lineKey = (l: Pick<CartLine, "slug" | "colorwayKey" | "size">) =>
  `${l.slug}:${l.colorwayKey}:${l.size ?? ""}`;

type CartCtx = {
  lines: CartLine[];
  add: (line: CartLine) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  keyOf: typeof lineKey;
};

const Ctx = createContext<CartCtx | null>(null);
const STORAGE = "sqysh-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  // hydrate from localStorage once
  // useEffect(() => {
  //   try {
  //     const raw = localStorage.getItem(STORAGE);
  //     if (raw) setLines(JSON.parse(raw));
  //   } catch {}
  // }, []);

  // persist on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(lines));
    } catch {}
  }, [lines]);

  const add = useCallback((line: CartLine) => {
    setLines((prev) => {
      const k = lineKey(line);
      const existing = prev.find((l) => lineKey(l) === k);
      if (existing) {
        return prev.map((l) =>
          lineKey(l) === k ? { ...l, qty: l.qty + line.qty } : l,
        );
      }
      return [...prev, line];
    });
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => lineKey(l) !== key)
        : prev.map((l) => (lineKey(l) === key ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback(
    (key: string) => setLines((prev) => prev.filter((l) => lineKey(l) !== key)),
    [],
  );

  const clear = useCallback(() => setLines([]), []);

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);

  return (
    <Ctx.Provider
      value={{
        lines,
        add,
        setQty,
        remove,
        clear,
        count,
        subtotal,
        keyOf: lineKey,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
};
