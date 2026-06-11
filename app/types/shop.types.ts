import { GROUPS } from "../lib/constants/shop.constants";

export type GroupKey = keyof typeof GROUPS;

export type CatalogCard = {
  slug: string;
  type: string;
  name: string;
  group: "clothing" | "accessories";
  price: number;
  description?: string; // catalog product description
  material?: string; // fabric/composition
  brand?: string; // e.g. "Bella + Canvas"
  model?: string; // e.g. "3001"
  colorways: {
    key: string;
    label: string;
    image: string | null;
    images: string[];
    variants: {
      printfulVariantId: number;
      size: string | null;
      price: number;
      image: string | null;
    }[];
  }[];
};
