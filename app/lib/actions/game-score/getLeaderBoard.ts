import prisma from "@/prisma/client";

export async function getLeaderboard() {
  try {
    const data = await prisma.gameScore.findMany({
      where: { initials: { not: null } },
      orderBy: [{ score: "desc" }, { createdAt: "asc" }],
      take: 10,
      select: {
        id: true,
        initials: true,
        score: true,
        city: true,
        region: true,
      },
    });
    return { success: true as const, data };
  } catch (error) {
    console.error("[getLeaderboard]", error);
    return { success: false as const, error: "Failed to load leaderboard" };
  }
}
