import { Router } from "express";
const router = Router();

// GET /tasks
router.get("/", async (req, res) => {
  const db = req.app.locals.db;
  const rows = await db.all("SELECT id, title, done FROM tasks ORDER BY id");
  res.json(rows);
});

// POST /tasks
router.post("/", async (req, res) => {
  const db = req.app.locals.db;
  const { title } = req.body || {};
  if (!title) return res.status(400).json({ error: "title required" });

  const result = await db.run(
    "INSERT INTO tasks (title, done) VALUES (?, 0)",
    title
  );
  const row = await db.get(
    "SELECT id, title, done FROM tasks WHERE id = ?",
    result.lastID
  );
  res.status(201).json(row);
});

// PATCH /tasks/:id
router.patch("/:id", async (req, res) => {
  const db = req.app.locals.db;
  const id = Number(req.params.id);
  const current = await db.get("SELECT * FROM tasks WHERE id = ?", id);
  if (!current) return res.status(404).json({ error: "not found" });

  const { title, done } = req.body || {};
  const newTitle = title ?? current.title;
  const newDone = done === undefined ? current.done : done ? 1 : 0;

  await db.run("UPDATE tasks SET title = ?, done = ? WHERE id = ?", newTitle, newDone, id);
  const row = await db.get("SELECT id, title, done FROM tasks WHERE id = ?", id);
  res.json(row);
});

// DELETE /tasks/:id
router.delete("/:id", async (req, res) => {
  const db = req.app.locals.db;
  const id = Number(req.params.id);
  await db.run("DELETE FROM tasks WHERE id = ?", id);
  res.status(204).end();
});

export default router;
