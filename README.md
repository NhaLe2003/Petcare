# PetCare Booking

A modern, responsive pet care booking website built with **React**, **Vite**, and **Tailwind CSS**.

## Features

- **Home** — Hero, featured services, why choose us, pricing preview, testimonials, stats
- **About** — Mission, vision, values, team, safety commitments
- **Services** — Filterable service catalog with book-now links
- **Pricing** — Size-based tables, combo packages, membership plans
- **Booking** — Full form with validation and success confirmation
- **Testimonials** — Customer reviews and satisfaction stats
- **Blog** — Pet care tips with category filtering
- **Contact** — Info, form, map placeholder
- **Auth** — Login, register, dashboard with appointment history

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Tech Stack

- React 19 + React Router 7
- Vite 8
- Tailwind CSS 4
- LocalStorage for mock auth & bookings (no backend)

## Project Structure

```
src/
  components/   # Reusable UI, layout, cards, home sections
  context/      # Auth & booking state
  data/         # Mock services, pricing, blog, testimonials, images
  pages/        # Route pages
  utils/        # Validation & localStorage helpers
public/images/  # Local SVG fallbacks (always available offline)
```

## Images

All remote URLs are managed in `src/data/images.js`. UI uses `ResponsiveImage` and `ImageBackground` with:

- `object-cover` and fixed aspect-ratio containers (no layout shift)
- Lazy loading and loading skeletons
- `onError` fallback to local SVGs in `/public/images/`
- Avatar fallbacks via UI Avatars API when needed

## Demo Account

Register any account — credentials are stored in browser localStorage.

The dashboard includes sample appointments to demonstrate booking statuses: pending, confirmed, completed, cancelled.
