import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartLine = {
  slug: string;
  colorwayKey: string;
  size: string | null;
  qty: number;
  name: string;
  colorwayLabel: string;
  price: number;
  image: string | null;
};

export const lineKey = (l: Pick<CartLine, "slug" | "colorwayKey" | "size">) =>
  `${l.slug}:${l.colorwayKey}:${l.size ?? ""}`;

type CartState = { lines: CartLine[] };
const initialState: CartState = { lines: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartLine>) {
      const k = lineKey(action.payload);
      const existing = state.lines.find((l) => lineKey(l) === k);
      if (existing) existing.qty += action.payload.qty;
      else state.lines.push(action.payload);
    },
    setQty(state, action: PayloadAction<{ key: string; qty: number }>) {
      const { key, qty } = action.payload;
      if (qty <= 0) {
        state.lines = state.lines.filter((l) => lineKey(l) !== key);
        return;
      }
      const line = state.lines.find((l) => lineKey(l) === key);
      if (line) line.qty = qty;
    },
    remove(state, action: PayloadAction<string>) {
      state.lines = state.lines.filter((l) => lineKey(l) !== action.payload);
    },
    clear(state) {
      state.lines = [];
    },
    hydrate(state, action: PayloadAction<CartLine[]>) {
      state.lines = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectLines = (s: RootState) => s.cart.lines;
export const selectCount = createSelector(selectLines, (ls) =>
  ls.reduce((n, l) => n + l.qty, 0),
);
export const selectSubtotal = createSelector(selectLines, (ls) =>
  ls.reduce(
    (sum: number, l: { price: number; qty: number }) => sum + l.price * l.qty,
    0,
  ),
);
