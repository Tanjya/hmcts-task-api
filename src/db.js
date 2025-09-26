import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Creates (or opens) the DB and ensures the schema exists
export async function createDb() {
  const filename = process.env.SQLITE_FILE || "./data.sqlite";
  const db = await open({ filename, driver: sqlite3.Database });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      done INTEGER NOT NULL DEFAULT 0
    );
  `);

  return db;
}
