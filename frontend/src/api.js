import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000"
});
export const getTasks = () => api.get("/tasks").then(r => r.data);
export const createTask = (data) => api.post("/tasks", data).then(r => r.data);
export const updateTask = (id, data) => api.patch(`/tasks/${id}`, data).then(r => r.data);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
