import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "erzi",
});

export async function GET(req: NextRequest) {
  try {
    const email = req.cookies.get("erziEmail")?.value;

    if (!email) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    const [rows] = await pool.query(
      "SELECT * FROM players WHERE email = ? LIMIT 1",
      [email]
    );

    const player = Array.isArray(rows) && rows[0] ? rows[0] : null;

    if (!player) {
      return NextResponse.json({ error: "Player not found" }, { status: 404 });
    }

    return NextResponse.json({ player });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}