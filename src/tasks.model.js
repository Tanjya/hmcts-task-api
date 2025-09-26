export async function createTask(db, data){ 
  const { title, description=null, status='todo', dueAt=null } = data;
  const res = await db.run(
    `INSERT INTO tasks (title,description,status,dueAt) VALUES (?,?,?,?)`,
    [title, description, status, dueAt]
  );
  return getTask(db, res.lastID);
}
export const getTask = (db, id) => db.get(`SELECT * FROM tasks WHERE id=?`, [id]);
export const listTasks = (db) => db.all(`SELECT * FROM tasks ORDER BY id DESC`);
export const updateStatus = (db, id, status) =>
  db.run(`UPDATE tasks SET status=? WHERE id=?`, [status, id]);
export const removeTask = (db, id) => db.run(`DELETE FROM tasks WHERE id=?`, [id]);
