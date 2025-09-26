import request from "supertest";
import app from "../src/app.js";
import { createDb } from "../src/db.js";

let server;
beforeAll(async () => {
  process.env.SQLITE_FILE = ":memory:"; // isolated, fast tests
  const db = await createDb();
  app.locals.db = db;
  server = app.listen(0); // ephemeral port
});

afterAll(async () => {
  await app.locals.db?.close();
  server?.close();
});

test("POST then GET /tasks", async () => {
  const created = await request(server).post("/tasks").send({ title: "Write tests" });
  expect(created.status).toBe(201);
  expect(created.body.title).toBe("Write tests");

  const list = await request(server).get("/tasks");
  expect(list.status).toBe(200);
  expect(Array.isArray(list.body)).toBe(true);
  expect(list.body.length).toBe(1);
  expect(list.body[0].title).toBe("Write tests");
});
