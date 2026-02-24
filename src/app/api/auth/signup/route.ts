import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || "erzi",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      password, 
      firstName,
      lastName,
      dateOfBirth,
      team,
      position,
      heightCm,
      weightKg,
      favoriteNhlTeam,
      avatarUrl,
    } = body;

    if (!email || !password || !firstName) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (email, password, firstName)" },
        { status: 400 }
      );
    }

    // Optional: normalize types
    const height = heightCm === "" || heightCm == null ? null : Number(heightCm);
    const weight = weightKg === "" || weightKg == null ? null : Number(weightKg);

    // Hash password for DB column: password_hash
    const password_hash = await bcrypt.hash(password, 10);

    // Insert player row
    await pool.query(
      `
      INSERT INTO players
        (email, password_hash, first_name, last_name, date_of_birth, team, position,
         height_cm, weight_kg, favorite_nhl_team, avatar_url, created_at)
      VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
      `,
      [
        email,
        password_hash,
        firstName,
        lastName ?? null,
        dateOfBirth ?? null,
        team ?? null,
        position ?? null,
        height,
        weight,
        favoriteNhlTeam ?? null,
        avatarUrl ?? null,
      ]
    );

    // Set cookie
    const res = NextResponse.json({ ok: true });
    res.cookies.set("erziEmail", email, { httpOnly: true, path: "/" });
    return res;
  } catch (err: any) {
    // Duplicate email
    if (err?.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { ok: false, error: "Email already in use" },
        { status: 409 }
      );
    }

    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}