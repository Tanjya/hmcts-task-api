import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/tasks", tasksRouter);

export default app;
