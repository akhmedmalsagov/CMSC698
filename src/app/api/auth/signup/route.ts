import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "erzi",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      passwordHash, // however you’re storing it
      firstName,
      lastName,
      dateOfBirth,
      team,
      position,
      heightCm,
      weightKg,
      favoriteNhlTeam,
    } = body;

    // Insert player row
    await pool.query(
      `
      INSERT INTO players
      (email, first_name, last_name, date_of_birth, team, position,
       height_cm, weight_kg, favorite_nhl_team)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        email,
        firstName,
        lastName,
        dateOfBirth,
        team,
        position,
        heightCm,
        weightKg,
        favoriteNhlTeam,
      ]
    );

    // TODO: also insert into your auth table / hash password, etc.

    // Set a cookie with their email so we can identify them later
    const res = NextResponse.json({ ok: true });
    res.cookies.set("erziEmail", email, { httpOnly: true, path: "/" });
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}