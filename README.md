# OTW - Ride Sharing Web Application 🚗More actions

A full-stack ride-sharing application where passengers can register, book rides, and manage their trips through a responsive dashboard. Built using **React**, **Node.js**, and **MongoDB**.

---

## ✨ Features

- 🔐 Secure passenger registration and login
- 🚕 Ride booking with pickup and drop locations
- 🧾 View current and past trips
- ✅ Mark rides as completed or cancel them
- 📦 Backend API using Express & Mongoose
- 🌐 Toast notifications for user feedback

---

## 🖥️ Screenshots

> Replace the labels below with your actual screenshots

- **Register Page:** `register-page.png`
- **Passenger Dashboard:** `dashboard.png`
- **Book Ride Form:** `book-ride.png`
- **Current Trip Section:** `current-trip.png`
- **Recent Trips Section:** `recent-trips.png`
- **Toast Notifications:** `toast-notification.png`

---

## 🛠 Tech Stack

### Frontend:
- React + TypeScript
- Tailwind CSS
- React Toastify
- Lucide React Icons

### Backend:
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- dotenv (Environment Config)

---

## 🚀 Getting Started

### 📁 Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/otw-rideshare.git
cd otw-rideshare
```

---
### Step 2. Backend Setup
```bash
cd backend
npm install
```

Create a .env file inside the backend folder and add:
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000
```

Run the server:
```bash
nodemon index.js
```
---
### Step 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```