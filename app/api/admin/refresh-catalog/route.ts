import { refreshCatalog } from "@/app/lib/actions/printful/getCatelog";
import { NextResponse } from "next/server";

export async function POST() {
  const result = await refreshCatalog();
  return NextResponse.json({ ok: true, ...result }); // { count: N }
}
