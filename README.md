# Gupta Restaurant 🍛

> **Good Food. Great Moments.**  
> Official production website for **Gupta Restaurant**, located in Thawe, Gopalganj, Bihar.

[![Deployment Status](https://img.shields.io/badge/Vercel-Deployed-success?logo=vercel&style=flat-square)](https://guptarestaurant.in)
[![Framework](https://img.shields.io/badge/React-19.0-61dafb?logo=react&style=flat-square)](https://react.dev)
[![Build Tool](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&style=flat-square)](https://vitejs.dev)
[![Styling](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss&style=flat-square)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&style=flat-square)](https://www.typescriptlang.org)

---

## 🍽️ Project Overview

Gupta Restaurant is a premier, family-friendly Indian restaurant situated on Main Road near V-Mart, Thawe, Gopalganj. This website was custom-engineered from the ground up to provide an editorial digital dining presence, offering visitors:

- Complete, structured 60+ item menu with verified local regional specialties (Handi Mutton, Dum Biryani, Paneer Butter Masala, Tandoori Breads, Indo-Chinese).
- Authentic FSSAI-style green square (Veg) and red square with triangle (Non-Veg) dietary classifications.
- Instant dish-level WhatsApp inquiry generation with prefilled details.
- Real-time client-side dish search and subcategory filters.
- Dedicated SEO-optimized pages for each core culinary category.
- Fixed Mobile Bottom Action Bar (`Home`, `Menu`, `Location`, `WhatsApp`, `Call`).
- Canonical Google Maps location embed and turn-by-turn directions.
- Direct calling (`08002970915`) and family/group visit booking engine.

---

## ✨ Features

- **Cinematic Hero**: Tailored desktop and mobile hero sequences highlighting house specialties and verified dining hours.
- **Structured Centralized Menu**: Easily maintainable data architecture in `src/data/menu.ts` supporting Half/Full portion prices.
- **Interactive Food Modal & Bottom Sheet**: Accessible detailed view for every item with instant WhatsApp pre-filled order/inquiry action.
- **Mobile Bottom Navigation Bar**: Fixed, slim, iOS safe-area compliant navigation bar for maximum conversion.
- **Interactive Location Discovery**: Google Maps interactive embed + verified street address card.
- **Curated Dining Gallery**: Filterable photo gallery with accessible fullscreen keyboard-navigable lightbox.
- **SEO & Structured Data**: Built-in JSON-LD `Restaurant` and `LocalBusiness` schema, OpenGraph tags, dynamic title/meta tags, `sitemap.xml`, and `robots.txt`.
- **Zero Fake Information**: All hours (`9:00 AM – 11:00 PM`), address, phone, pricing (`₹200 – ₹400 / person`), and 300+ Google Reviews are grounded in real verified details.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Routing**: Wouter (ultra-lightweight client-side router with SPA rewrites)
- **Styling**: Tailwind CSS + Custom Design System Tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Hosting / Deployment**: Vercel

---

## 📂 Project Architecture

```
gupta-restaurant/
├── public/
│   ├── favicon.svg          # Custom golden monogram logo
│   ├── robots.txt           # Search engine directives
│   └── sitemap.xml          # XML sitemap with all routes
├── src/
│   ├── components/
│   │   ├── common/          # VegBadge, WhatsAppButton, SEOHead
│   │   ├── gallery/         # GalleryGrid, Lightbox
│   │   ├── home/            # Hero, QuickInfoStrip, FoodExperience, Story, Reviews, Location
│   │   ├── layout/          # Navbar, MobileNav, MobileBottomBar, Footer
│   │   └── menu/            # MenuSearch, MenuFilters, FoodCard, FoodDetailModal
│   ├── data/
│   │   ├── restaurant.ts    # Central business details & verified contact
│   │   ├── menu.ts          # Centralized dishes & category catalog
│   │   ├── gallery.ts       # Curated photography collection
│   │   └── reviews.ts       # Verified Google reviews
│   ├── lib/
│   │   └── whatsapp.ts      # WhatsApp link generator with message templates
│   ├── pages/               # Route components: Home, Menu, Categories, About, Gallery, Contact, 404
│   ├── types/               # TypeScript interfaces (menu, restaurant, gallery)
│   ├── App.tsx              # Application shell & route switch
│   ├── index.css            # Tailwind directives & custom CSS variables
│   └── main.tsx             # DOM mount
├── vercel.json              # SPA rewrite rule for direct route navigation
├── tailwind.config.js       # Bespoke warm brass and charcoal palette
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite build configuration
```

---

## 🚀 Local Development

### 1. Clone & Install
```bash
git clone https://github.com/mohitsah08/gupta-restaurant.git
cd gupta-restaurant
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled static assets will be in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🔒 Environment Variables

No private API keys or secrets are required for basic runtime. All business links (WhatsApp, Google Maps, Phone) utilize standard web protocols (`https://wa.me/`, `https://maps.google.com/`, `tel:`) configured in `src/data/restaurant.ts`.

---

## 🌐 Production Deployment

The project is configured for one-click deployment on **Vercel**:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Routing**: Handled by `vercel.json` SPA rewrites.

---

## 📍 Restaurant Information

- **Name**: Gupta Restaurant (गुप्ता रेस्टोरेंट)
- **Address**: Shop No. 1, Main Road, Near V Mart, Ward No. 15, Thawe, Gopalganj, Bihar 841428
- **Phone**: +91 80029 70915
- **WhatsApp**: +91 80029 70915
- **Hours**: 9:00 AM – 11:00 PM (Monday – Sunday)
- **Average Cost**: ₹200 – ₹400 per person (~₹500 for two)

---

© Gupta Restaurant. All rights reserved.
