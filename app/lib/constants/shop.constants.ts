export const GROUPS = {
  clothing: {
    label: "clothing",
    line: "for the late-night deploys.",
    categories: ["tshirt", "sweatshirt", "hoodie"],
  },
  accessories: {
    label: "accessories",
    line: "small, adhesive, hydrating. like a good agency.",
    categories: ["sticker", "tumbler", "hat"],
  },
} as const;

export const emptyCartLines = [
  "nothing in here but me.",
  "0 items. bold strategy.",
  "this cart is a void.",
  "i checked. it's empty.",
  "no packages installed yet.",
  "your cart is light as a feather.",
  "8 arms holding nothing.",
  "the registry awaits.",
  "cart.length === 0",
  "empty. just like the deep sea.",
  "go on, install something.",
];

export const cartBoopLines = [
  "solid haul.",
  "checkout's right there.",
  "i'd buy these too.",
  "stop booping, start buying.",
  "those are gonna look good on you.",
  "add one more? just sayin'.",
  "ship it to yourself, you earned it.",
  "quit stalling, hit checkout.",
  "great taste, obviously.",
];

// lines that work for anything
const productBoopLinesBase = [
  "good eye.",
  "this one's a favorite.",
  "go on, add it.",
  "solid choice incoming.",
  "the print's crisp on this one.",
  "yeah, you want it.",
  "tasteful. very tasteful.",
];

export const productBoopLinesClothing = [
  ...productBoopLinesBase,
  "i'd wear this.",
  "looks better in person.",
  "imagine it on you.",
];

export const productBoopLinesAccessory = [
  ...productBoopLinesBase,
  "this one's handy.",
  "everyday carry, upgraded.",
  "functional and fly.",
];
