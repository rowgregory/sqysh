import type { Metadata } from "next";
import { ShopClient } from "./ShopClient";
import { getCatalog } from "@/app/lib/actions/printful/getCatelog";

export const metadata: Metadata = {
  title: "Sqysh Registry — Shop",
  description: "Official Sqysh merch. Install something.",
};

export const revalidate = 3600; // matches the cache window

export default async function ShopPage() {
  const catalog = await getCatalog();
  return <ShopClient catalog={catalog} />;
}
