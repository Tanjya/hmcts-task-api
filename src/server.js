import app from "./app.js";
import { createDb } from "./db.js";

const port = process.env.PORT || 3000;

// Top-level await is fine in Node 22
const db = await createDb();
app.locals.db = db;

app.listen(port, () => {
  console.log(`API on :${port}`);
});
