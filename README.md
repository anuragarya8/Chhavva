# Chhavva — MERN E-Commerce Clothing Platform

Full-stack shopping experience for Indian fashion: product catalog, cart/checkout, JWT auth, and an admin dashboard. Live demo: [chhavva.vercel.app](https://chhavva.vercel.app)

## Features

- Product browsing with categories and filters
- Cart and checkout with responsive UI
- JWT authentication and order management
- Admin dashboard for products and orders
- Desi-inspired visual design (React + Tailwind)

## Tech stack

| Layer | Stack |
| --- | --- |
| Frontend | React, Tailwind CSS, Redux Toolkit |
| Backend | Node.js, Express |
| Database | MongoDB + Mongoose |
| Auth | JWT |
| Deploy | Vercel (`frontend/`) |

## Project structure

```
Chhavva/
├── frontend/   # React storefront + admin UI
├── backend/    # Express API
└── admin/      # Admin-related assets
```

## Quick start

```bash
# API
cd backend
npm install
cp .env.example .env   # or create .env with MONGO_URI, JWT_SECRET, etc.
npm run dev

# Storefront
cd ../frontend
npm install
npm run dev
```

## Links

- **Demo:** https://chhavva.vercel.app
- **Author:** [anuragarya8](https://github.com/anuragarya8)
- **Portfolio:** https://portfolio-orpin-sigma-37.vercel.app
