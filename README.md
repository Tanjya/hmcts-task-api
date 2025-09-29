# HMCTS Task Manager API (Developer Challenge)

This is a simple task management API built with **Node.js + Express** and **SQLite**.  
It was created as part of the HMCTS Developer Challenge to demonstrate REST API design, validation, testing, and documentation.

---

## 📦 Tech Stack
- **Node.js / Express** → backend framework
- **SQLite** (default) → database (lightweight, file-based)
- **Jest + Supertest** → automated testing
- **CORS, JSON middleware** → basic API handling

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
cd backend
npm install

---

## 📌 Known Issues & Next Steps

- **Frontend connectivity**:  
  The frontend currently displays *“backend not reachable.”*  

  - The backend API itself is fully functional — all CRUD endpoints work and are covered by automated tests (`npm test`).  
  - The issue is related to environment variable configuration (e.g. `VITE_API_URL`) and CORS setup between `localhost:5173` (frontend) and `localhost:3000` (backend).  

  **If given more time I would fix this by:**  
  1. Adjusting the `.env` in `frontend/` to correctly point to the backend API.  
  2. Verifying CORS headers from the Express backend.  
  3. Adding integration tests to confirm frontend ↔ backend connectivity.

- **Future enhancements planned**:  
  - Add Docker Compose for one-command startup (frontend + backend + database).  
  - Extend frontend test coverage with negative cases.  
  - Apply GOV.UK Design System styles to align with HMCTS standards.  
  - Deploy to free hosting (Netlify + Render/Heroku) for a working demo link.
