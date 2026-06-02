# 🚀 ConnectNow – Real-Time Chat Application

ConnectNow is a **full-stack real-time chat application** built using **React, Node.js, Express, PostgreSQL, and Socket.IO**.

The application allows users to:

* Register and Login securely
* Create and manage chat rooms
* Send real-time messages instantly
* Share images and documents
* Join shared workspaces and communicate smoothly

This project focuses on **real-time communication, backend architecture, authentication, database management, and deployment workflows**.

---

## 📌 Live Demo

### Backend Live URL

```bash
https://connectnow-backend-bk7y.onrender.com
```

(Frontend deployment coming soon.)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS / Inline Styling
* Fetch API

### Backend

* Node.js
* Express.js
* Socket.IO
* JWT Authentication
* Multer (File Uploads)

### Database

* PostgreSQL

### Deployment

* GitHub
* Render

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* Protected Routes using JWT

### 💬 Real-Time Messaging

* Instant message delivery using Socket.IO
* Shared room communication

### 🏠 Room Management

* Create chat rooms
* Shared room system
* Room listing support

### 📎 File Sharing

* Image upload support
* Document upload support

### 🎨 UI / UX

* Clean workspace layout
* Sidebar room navigation
* Scrollable room container
* Responsive chat experience

---

## 📂 Project Structure

```bash
connectnow/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── routes/
│   ├── uploads/
│   ├── socket.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Local Setup Guide

### 1. Clone Repository

```bash
git clone https://github.com/mohammedyehaya2003/connectnow.git
```

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

Create a `.env` file:

```env
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_password
DB_PORT=5432
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🚧 Challenges Faced & Recovery Process

This project involved several real-world debugging and deployment challenges.

### 1. Hybrid Room Feature Instability

**Problem:**
After introducing the hybrid/shared room concept, the application became unstable.

Issues included:

* Room creation failure
* Message sending problems
* Image/document upload issues

**Recovery:**
Performed step-by-step debugging, validated createRoom logic, corrected UI state handling, and stabilized room management.

---

### 2. Git & Repository Recovery

**Problem:**
Git initialization, tracking, and push flow created confusion during project setup.

**Recovery:**
Fixed repository setup, handled tracking issues, configured `.gitignore`, committed successfully, and pushed the project to GitHub.

---

### 3. Render Deployment & Database Failure

**Problem:**
Deployment initially failed because:

```text
localhost database cannot be accessed by Render servers
```

Backend logs showed:

```text
Database connection failed
```

**Recovery Process:**

* Connected backend to Render.
* Configured environment variables.
* Identified localhost deployment limitation.
* Reused cloud PostgreSQL temporarily.
* Migrated database connection to:

```env
DATABASE_URL
```

Updated backend configuration for cloud deployment.

Final result:

```text
PostgreSQL Connected Successfully ✅
Backend Live Successfully 🚀
```

---

## 📚 Key Learnings

Through this project, I improved my understanding of:

* Full-stack application development
* Real-time systems with Socket.IO
* Authentication workflows
* PostgreSQL integration
* Environment variable management
* Cloud deployment debugging
* Production problem solving

---

## 📈 Future Improvements

Planned enhancements:

* Frontend cloud deployment
* User profile support
* Online / Offline user status
* Typing indicators
* Message reactions
* Better responsive design
* Private chat functionality

---

## 👨‍💻 Author

**Mohammed Yehaya**

Built with patience, debugging, learning, and a strong focus on improving full-stack development skills.
