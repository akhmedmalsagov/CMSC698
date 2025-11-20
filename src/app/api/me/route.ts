import { NextRequest, NextResponse } from "next/server";
import { getPlayerById } from "@/lib/auth";

export async function GET(req: NextRequest) {
  // Read cookie from the request
  const id = req.cookies.get("erzi_user_id")?.value;

  if (!id) {
    return NextResponse.json({ player: null }, { status: 401 });
  }

  const player = await getPlayerById(Number(id));

  if (!player) {
    return NextResponse.json({ player: null }, { status: 401 });
  }

  // Make a shallow copy so we can safely remove sensitive fields
  const safePlayer = { ...(player as any) };

  // Remove password fields if they exist
  delete safePlayer.password;
  delete safePlayer.password_hash;
  delete safePlayer.passwordHash;

  return NextResponse.json({ player: safePlayer });
}