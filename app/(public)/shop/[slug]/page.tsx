import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCatalog } from "@/app/lib/actions/printful/getCatelog";
import { ShopDetailClient } from "./ShopDetailClient";

export const revalidate = 3600;

export async function generateStaticParams() {
  const catalog = await getCatalog();
  return catalog.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const catalog = await getCatalog();
  const card = catalog.find((c) => c.slug === slug);
  if (!card) return { title: "Not found — Sqysh Registry" };

  const ogImage = card.colorways[0]?.image ?? undefined;

  return {
    title: `${card.name} — Sqysh Registry`,
    description: card.description ?? `${card.name} · install something.`,
    openGraph: ogImage ? { images: [{ url: ogImage }] } : undefined,
  };
}

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const catalog = await getCatalog();
  const card = catalog.find((c) => c.slug === slug);

  if (!card) notFound();

  return <ShopDetailClient card={card} />;
}
