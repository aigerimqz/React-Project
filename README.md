# 🌍 Saiahat

A full-stack travel web application that allows users to explore, favorite, and book tours around the world.
The project includes a **React frontend** for user interaction and a **Django backend** for managing tours, users, favorites, and bookings.

---

## 🧩 Project Overview

**Goal:** Create a user-friendly platform where visitors can:

* Browse available tours (local and international)
* View tour details, photos, prices, and ratings
* Favorite tours (locally or with user account)
* Book tours (simulation)
* Manage user profile and avatar
* Use the app offline via PWA functionality

---

## ⚙️ Tech Stack

**Frontend:**

* React (Vite)
* React Router v6
* Redux Toolkit (state management)
* CSS (custom styles, responsive)
* Firebase (Auth, optional data storage)
* PWA support (service worker, offline mode)
* i18n context (multi-language support)

**Backend:**

* Django
* Django REST Framework (API creation)
* PostgreSQL (database)
* Fully deployed via Render

---

## 🚀 Installation and Setup

### 1️⃣ Backend Deploying

Backend runs at:
👉 `https://react-project-jbmu.onrender.com/`

**(Please wait until API loads, it takes ~2-3 minutes 🥹)**


---

### 2️⃣ Frontend Setup

1. Navigate to frontend folder:

```bash
cd react-project
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

Frontend runs at:
👉 `http://localhost:5173/`

---

## 🔗 Backend API Endpoints

### Tours

| Method   | Endpoint           | Description           | Auth   |
| -------- | ------------------ | --------------------- | ------ |
| `GET`    | `/api/tours/`      | List all tours        | Public |
| `GET`    | `/api/tours/<id>/` | Retrieve tour details | Public |
| `POST`   | `/api/tours/`      | Create a new tour     | Admin  |
| `PUT`    | `/api/tours/<id>/` | Update a tour         | Admin  |
| `DELETE` | `/api/tours/<id>/` | Delete a tour         | Admin  |


---


## 🔗 Firebase (Users & Favorites)

### Users

* Authentication via **Firebase Auth** (email/password)
* User profile data stored in **Firestore**:

  * `users/{uid}` document contains fields like:

    * `displayName`
    * `email`
    * `avatar` (base64 image string)

### Favorites

* Favorites are synced with Firebase for logged-in users:

  * `favorites/{uid}/` subcollection contains user’s favorite tours
* Guests store favorites **locally** in `localStorage`

**Firebase operations in frontend:**

| Action                | Method / Function                           | Description                            |
| --------------------- | ------------------------------------------- | -------------------------------------- |
| Add favorite          | `addFavorite({ uid, tour })`                | Add tour to Firebase or localStorage   |
| Remove favorite       | `removeFavorite({ uid, tourId })`           | Remove tour from Firebase/localStorage |
| Fetch favorites       | `fetchFavorites(uid)`                       | Load user favorites from Firebase      |
| Update profile avatar | `setDoc(doc(db, "users", uid), { avatar })` | Upload avatar image to Firestore       |

---

## 📱 PWA & Offline Support

* `manifest.json` with app icons
* Service worker caching:

  * App shell cached (`index.html`, CSS, JS, icons)
  * API data caching strategy (network-first for API, cache-first for static assets)
* Offline banner when user is offline
* Installable on mobile devices

---

## 🧑‍💻 Frontend Features

* React components for:

  * Home page, About, Tours list, Tour detail
  * Favorites list
  * Profile page (avatar upload)
* Redux Toolkit for global state (tours, favorites, bookings)
* Search & filters with debounce
* Pagination
* Responsive design
* Offline-ready with service worker
* Filter by category and continent

---

## 📚 Future Improvements

* Add real booking system
* Add payment system integration
* Enhance user authentication (email verification, password reset)
* Add reviews & ratings for tours from users
* Real-time booking updates with WebSocket

---

## 🧑‍💻 Team

| Name    | Role                 | Description                        |
| ------- | -------------------- | ---------------------------------- |
| Aigerim | Full-stack Developer | Developed frontend & backend logic |

---

## ⚠️ Notes

* Favorites are stored locally for guest users; saved to firebase backend for authenticated users.
* Avatar images are stored in Firebase as base64 strings.
* API from Django.


