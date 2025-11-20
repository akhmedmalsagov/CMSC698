import { getDb } from "./db";

export async function getPlayerById(id: number) {
  const db = getDb();

  const [rows] = await db.query("SELECT * FROM players WHERE id = ?", [id]);
  const players = rows as any[];

  if (!players.length) return null;

  return players[0]; // full row from DB
}