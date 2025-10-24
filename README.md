
# 🌍 Saiahat

A simple full-stack web application that allows users to explore and book tours around the world.
The project includes a **React frontend** for user interaction and a **Django backend** for managing tours, users, and bookings.

---

## 🧩 Project Overview

**Goal:** Create a user-friendly website where visitors can:

* View available tours (local and international)
* See details, prices, and dates
* Book a trip (basic booking simulation)

---

## ⚙️ Tech Stack

**Frontend:**

* React (Vite)
* CSS (custom styles, responsive design)

**Backend:**

* Django
* Django REST Framework (API creation)



---


---

## 🚀 Installation and Setup

### 1️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # for Windows
source venv/bin/activate  # for Mac/Linux
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create superuser (for admin panel):

```bash
python manage.py createsuperuser
```

Run server:

```bash
python manage.py runserver
```

The backend will run at:
👉 `http://127.0.0.1:8000/`

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:
👉 `http://localhost:5173/`

---

## 🔗 API Endpoints

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | `/api/tours/`      | Get all tours                  |




## 🧑‍💻 Team

| Name    | Role                 | Description                        |
| ------- | -------------------- | ---------------------------------- |
| Aigerim | Full-stack Developer | Developed frontend & backend logic |
| —       | —                    | —                                  |

---

## 📚 Future Improvements

* Add user authentication (login/register)
* Integrate real booking/payment system
* Add search and filter for tours
* Deploy to Render / Vercel / Railway

---
