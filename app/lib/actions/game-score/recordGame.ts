"use server";

import prisma from "@/prisma/client";
import { headers } from "next/headers";

type RecordGameResult =
  | { success: true; data: { id: string; qualifies: boolean } }
  | { success: false; error: string };

export async function recordGame(score: number): Promise<RecordGameResult> {
  try {
    if (!Number.isInteger(score) || score < 0 || score > 1000) {
      return { success: false, error: "Invalid score" };
    }

    const h = await headers();
    const rawCity = h.get("x-vercel-ip-city");
    const lat = Number.parseFloat(h.get("x-vercel-ip-latitude") ?? "");
    const lng = Number.parseFloat(h.get("x-vercel-ip-longitude") ?? "");

    const row = await prisma.gameScore.create({
      data: {
        score,
        country: h.get("x-vercel-ip-country"),
        region: h.get("x-vercel-ip-country-region"),
        city: rawCity ? decodeURIComponent(rawCity) : null,
        latitude: Number.isNaN(lat) ? null : lat,
        longitude: Number.isNaN(lng) ? null : lng,
      },
    });

    const top = await prisma.gameScore.findMany({
      where: { initials: { not: null } },
      orderBy: [{ score: "desc" }, { createdAt: "asc" }],
      take: 10,
      select: { score: true },
    });

    const qualifies = top.length < 10 || score > top[top.length - 1].score;

    return { success: true, data: { id: row.id, qualifies } };
  } catch (error) {
    console.error("[recordGame]", error);
    return { success: false, error: "Failed to record game" };
  }
}
