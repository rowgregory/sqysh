import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { cameFrom } = await req.json();

    if (!cameFrom || typeof cameFrom !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid cameFrom parameter" },
        { status: 400 }
      );
    }

    const referral = await prisma.referralCounter.upsert({
      where: { flag: cameFrom },
      update: {
        count: {
          increment: 1,
        },
      },
      create: {
        flag: cameFrom,
        count: 1,
      },
    });

    return NextResponse.json({
      message: `Count updated for ${cameFrom}`,
      count: referral.count,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update count" },
      { status: 500 }
    );
  }
}
