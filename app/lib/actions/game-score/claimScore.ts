"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

const BANNED = new Set([
  "ASS",
  "FUK",
  "FUC",
  "FCK",
  "KKK",
  "NIG",
  "FAG",
  "CUM",
  "SEX",
  "DIK",
  "COK",
  "TIT",
]);

type ClaimResult =
  | { success: true; data: { initials: string } }
  | { success: false; error: string };

export async function claimScore(
  id: string,
  initials: string,
): Promise<ClaimResult> {
  try {
    const clean = initials
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .slice(0, 3);
    if (clean.length === 0)
      return { success: false, error: "Invalid initials" };
    if (BANNED.has(clean))
      return { success: false, error: "Pick different initials" };

    // updateMany as a conditional update: only fires if unclaimed + recent
    const result = await prisma.gameScore.updateMany({
      where: {
        id,
        initials: null, // can't overwrite a claimed score
        createdAt: { gte: new Date(Date.now() - 10 * 60 * 1000) }, // claim window: 10 min
      },
      data: { initials: clean },
    });

    if (result.count === 0) {
      return { success: false, error: "Score not found or already claimed" };
    }

    revalidatePath("/debug");

    return { success: true, data: { initials: clean } };
  } catch (error) {
    console.error("[claimScore]", error);
    return { success: false, error: "Failed to claim score" };
  }
}
