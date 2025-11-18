import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "erzi",
});

export async function POST(req: NextRequest) {
  try {
    const email = req.cookies.get("erziEmail")?.value;
    if (!email) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("avatar");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // filename: avatars/<email-timestamp>.png
    const avatarsDir = path.join(process.cwd(), "public", "avatars");
    if (!fs.existsSync(avatarsDir)) {
      fs.mkdirSync(avatarsDir, { recursive: true });
    }

    const safeEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
    const fileName = `${safeEmail}-${Date.now()}.png`;
    const filePath = path.join(avatarsDir, fileName);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/avatars/${fileName}`;

    // Update DB
    await pool.query("UPDATE players SET avatar_url = ? WHERE email = ?", [
      publicUrl,
      email,
    ]);

    return NextResponse.json({ avatarUrl: publicUrl });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}