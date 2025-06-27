
# 📚 Library Lab – Full Stack Book Management System

A modern full-stack Library Management System built with **Next.js**, **MongoDB**, and **Tailwind CSS**. It allows users to register, browse books, manage carts, and securely purchase or borrow books using **Razorpay integration**. Admins can manage inventory, users, and transactions with ease.

---

## Visit
- https://liblab.netlify.app/
---
## 🔥 Features

- 👤 User Authentication with **NextAuth.js**
- 🛍️ Book Cart and Checkout System
- 💳 **Razorpay** Payment Gateway Integration
- 🧑‍💼 Admin Dashboard to Manage Books & Users
- 🌙 Light/Dark Mode Support
- 🔒 Route Protection & Middleware Setup
- 📦 MongoDB + Mongoose Models for DB Management

---

## 🛠️ Tech Stack

| Frontend        | Backend         | Auth & Payment        |
|-----------------|------------------|------------------------|
| Next.js         | MongoDB + Mongoose | NextAuth.js & Razorpay |
| React           | REST API Routes  | JWT (Credentials Provider) |
| Tailwind CSS    |                 |                        |

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root and add:

```env
# Public
NEXT_PUBLIC_BOOKS_API_KEY=your_books_api_key
NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID=your_razorpay_key_id

# Server-only
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_auth_secret
```

> ✅ NEVER push `.env.local` to GitHub

---

## 📂 Project Structure

```
.
├── app/
│   ├── api/                # Backend API routes
│   ├── component/          # All frontend components
│   ├── models/             # Mongoose models
│   └── page.js             # Main landing page
├── backend/                # Backend utilities
├── public/                 # Static files (images, models)
├── lib/                    # DB connection, helpers
├── middleware.js           # Route protection
├── next.config.mjs         # Next.js config
└── .env.local              # Environment variables
```

---

## 🚀 Getting Started

### Clone & Run Locally

```bash
git clone https://github.com/Sameer1311/lib_lab.git
cd lib_lab
npm install
npm run dev
```

> The app runs on `http://localhost:3000`

---

## 📦 Deployment

You can deploy this app on [Vercel](https://vercel.com/) or [Render](https://render.com/).  
**Make sure to set all required environment variables in your deployment settings.**

---

## 🙋‍♂️ Author

**Sameer Negi**  
📧 negisameer72@gmail.com
🔗 [GitHub](https://github.com/Sameer1311)

---

## 📜 License

This project is licensed under the MIT License.  
Feel free to use, fork, and contribute!

---
