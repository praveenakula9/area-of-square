# Square Area Calculator

A full-stack web application to calculate the area of a square, built with **Spring Boot** (backend) and **React + Vite** (frontend).

## 🔗 Live Demo

- **Frontend:** https://area-of-square.vercel.app
- **Backend API:** https://area-of-square.onrender.com/api/area?side=5

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, Axios |
| Backend | Spring Boot, Java |
| Deployment (Frontend) | Vercel |
| Deployment (Backend) | Render (Docker) |

---

## 📁 Project Structure

```
area-of-square/
├── square-area/          # Spring Boot backend
│   ├── src/
│   │   └── main/java/com/example/square_area/
│   │       ├── SquareAreaApplication.java
│   │       └── SquareController.java
│   ├── Dockerfile
│   └── pom.xml
└── my-react-app/         # React frontend
    ├── src/
    │   ├── App.jsx
    │   └── App.css
    └── package.json
```

---

## 🚀 Run Locally

### Backend
```bash
cd square-area
.\mvnw spring-boot:run
```
Runs at `http://localhost:8080`

### Frontend
```bash
cd my-react-app
npm install
npm run dev
```
Runs at `http://localhost:5173`

---

## 📡 API

```
GET /api/area?side={value}
```

**Example:**
```
GET http://localhost:8080/api/area?side=5
Response: 25.0
```

---

## ✨ Features

- Enter side length and instantly calculate area
- Clean dark UI with smooth animations
- Connected to live backend via REST API
- Fully deployed online

---

## 👤 Author

**Durga Sri Praveen** — [GitHub](https://github.com/praveenakula9)
