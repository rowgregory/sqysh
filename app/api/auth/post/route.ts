"use server";

import { NextRequest, NextResponse } from "next/server.js";
import { URL } from "url";
import { register } from "./register";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const query = url.searchParams.get("endpoint");

  switch (query) {
    case "REGISTER":
      return register(req);
    default:
      return NextResponse.json(
        { message: "Invalid endpoint" },
        { status: 400 }
      );
  }
}
