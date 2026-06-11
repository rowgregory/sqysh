import prisma from "@/prisma/client";
import { unstable_cache, revalidateTag } from "next/cache";
import { pf } from "../../utils/pf";
import { CatalogCard } from "@/app/types/shop.types";

const APPAREL_SIZES = new Set([
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL",
  "4XL",
  "5XL",
]);

const COLORWAYS = new Set([
  "chartreuse",
  "white",
  "blue",
  "purple",
  "black",
  "teal",
  "ocean blue",
  "neon blue",
  "neon purple",
  "rainbow",
  "trans",
  "bi",
  "lesbian",
  "progress",
  "rainbow eyes",
  "mascot",
  "text",
  "ocean",
]);

const CLOTHING_TYPES = new Set([
  "snapback",
  "zip hoodie",
  "beanie",
  "cap",
  "hat",
]);

type ProductMeta = {
  description?: string;
  material?: string;
  brand?: string;
  model?: string;
};

function parseName(name: string) {
  const parts = name.split(" - ").map((s) => s.trim());
  const tokens = parts[0]?.toLowerCase() === "sqysh" ? parts.slice(1) : parts;

  let colorway = "default";
  let colorwayLabel = "Default";
  const last = tokens[tokens.length - 1];
  if (last && COLORWAYS.has(last.toLowerCase())) {
    colorwayLabel = last;
    colorway = last.toLowerCase();
    tokens.pop();
  }

  const base = tokens.join(" - ");
  const type = tokens[0] ?? "Item";
  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return { slug, type, name: "Sqysh " + base, colorway, colorwayLabel };
}

// Only the composited garment mockup ("preview"); excludes raw print files
// (default / front_dtf / back / back_dtf), which are flat design art, not product shots.
function mockupUrls(syncVariants: any[]): string[] {
  const urls = syncVariants
    .flatMap((v) =>
      (v.files ?? [])
        .filter((f: any) => f.type === "preview")
        .map((f: any) => f.preview_url),
    )
    .filter(Boolean) as string[];
  return [...new Set(urls)];
}

function extractMeta(product: any): ProductMeta {
  return {
    description: product.description || undefined,
    brand: product.brand || undefined,
    model: product.model || undefined,
    material: Array.isArray(product.materials)
      ? product.materials
          .map((m: any) =>
            m.percentage ? `${m.percentage}% ${m.name}` : m.name,
          )
          .join(", ") || undefined
      : undefined,
  };
}

async function mapLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const out: R[] = [];
  for (let i = 0; i < items.length; i += limit) {
    out.push(...(await Promise.all(items.slice(i, i + limit).map(fn))));
    if (i + limit < items.length) await new Promise((r) => setTimeout(r, 250));
  }
  return out;
}

// ─────────────────────────────────────────────────────────────
// READ — what the shop & checkout call. Fast Prisma read, no Printful.
// Cached + tag-invalidated; refreshCatalog() busts it via revalidateTag.
// ─────────────────────────────────────────────────────────────
export const getCatalog = unstable_cache(
  async (): Promise<CatalogCard[]> => {
    const row = await prisma.catalogCache.findUnique({
      where: { id: "singleton" },
    });
    return (row?.data as CatalogCard[] | undefined) ?? [];
  },
  ["sqysh-catalog"],
  { tags: ["catalog"], revalidate: 3600 }, // tag = primary invalidation; 3600 = backstop
);

// ─────────────────────────────────────────────────────────────
// REFRESH — slow Printful pull → write the DB row. NOT in the render path.
// Call from the Printful product_updated webhook, an admin button, or a cron.
// ─────────────────────────────────────────────────────────────
export async function refreshCatalog(): Promise<{ count: number }> {
  // 1. paginated product list
  const list: { id: number }[] = [];
  let offset = 0;
  for (;;) {
    const { result, paging } = await pf(
      `/sync/products?offset=${offset}&limit=100`,
    );
    list.push(...result);
    offset += result.length;
    if (result.length === 0 || offset >= paging.total) break;
  }

  // 2. batched detail fetch (3 at a time, 250ms between batches → no 429)
  const detailed = await mapLimit(list, 3, (p) => pf(`/sync/products/${p.id}`));

  // 2b. unique catalog product IDs (many sync products share one blank)
  const catalogIds = [
    ...new Set(
      detailed.flatMap(({ result }) =>
        (result.sync_variants as any[])
          .map((v) => v.product?.product_id)
          .filter((id): id is number => typeof id === "number"),
      ),
    ),
  ];

  // 2c. fetch catalog detail once per unique blank (deduped, rate-limited, guarded)
  const catalogDetails = await mapLimit(catalogIds, 3, (id) =>
    pf(`/products/${id}`).catch(() => null),
  );

  const metaById = new Map<number, ProductMeta>();
  catalogDetails.forEach((res, i) => {
    const product = res?.result?.product;
    if (product) metaById.set(catalogIds[i], extractMeta(product));
  });

  // 3. group into cards
  const cards = new Map<string, CatalogCard>();
  for (const { result } of detailed) {
    const { sync_product, sync_variants } = result;
    const parsed = parseName(sync_product.name);

    const variants = sync_variants.map((v: any) => ({
      printfulVariantId: v.id,
      size: v.name.split(" / ")[1]?.trim() ?? null,
      price: Number(v.retail_price),
      image:
        v.files.find((f: any) => f.type === "preview")?.preview_url ?? null,
    }));

    const isClothing =
      variants.some(
        (v: { size: string }) => v.size && APPAREL_SIZES.has(v.size),
      ) || CLOTHING_TYPES.has(parsed.type.toLowerCase());

    const card =
      cards.get(parsed.slug) ??
      ({
        slug: parsed.slug,
        type: parsed.type,
        name: parsed.name,
        group: isClothing ? "clothing" : "accessories",
        price: Infinity,
        colorways: [],
      } satisfies CatalogCard);

    // attach catalog meta once per card (first colorway sets it for all)
    if (!card.description && !card.material && !card.brand) {
      const pid = sync_variants[0]?.product?.product_id;
      const meta = pid != null ? metaById.get(pid) : undefined;
      if (meta) {
        card.description = meta.description;
        card.material = meta.material;
        card.brand = meta.brand;
        card.model = meta.model;
      }
    }

    const images = mockupUrls(sync_variants);

    card.colorways.push({
      key: parsed.colorway,
      label: parsed.colorwayLabel,
      image: images[0] ?? null,
      images,
      variants,
    });
    card.price = Math.min(
      card.price,
      ...variants.map((v: { price: any }) => v.price),
    );
    cards.set(parsed.slug, card);
  }

  const data = [...cards.values()];

  // 4. write the singleton row
  await prisma.catalogCache.upsert({
    where: { id: "singleton" },
    create: { id: "singleton", data: data as any },
    update: { data: data as any },
  });

  // 5. bust the read cache so the shop picks it up immediately
  revalidateTag("catalog", "max");

  return { count: data.length };
}
