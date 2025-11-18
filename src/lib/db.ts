import mysql from 'mysql2/promise';

let pool: mysql.Pool;

export function getDb() {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL not set');
    }
    pool = mysql.createPool({
      uri: process.env.DATABASE_URL,
      connectionLimit: 10,
    });
  }
  return pool;
}