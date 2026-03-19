# aiva-landing

> Marketing landing page for AIVA: hero section, feature showcase, use cases, blockchain pages, and PWA install flow.

**Organization:** [github.com/aiva-labs](https://github.com/aiva-labs)
**Status:** Active

---

## Overview

This repo contains the public-facing marketing website for AIVA. It introduces the product to new users, showcases features, explains use cases, and guides users into the PWA install flow.

---

## Features

- Futuristic dark-themed hero with animated 3D AI character (Three.js + VRM)
- Mega navigation menu with multi-section dropdown
- Feature cards with animated reveal on scroll
- Multi-language content structure ready
- Use case pages (Personal, Business, Developer, Student, Trader)
- Blockchain pages (Base, Bridge, Contracts, History, Wallet)
- Resources pages (Blog, Changelog, Community, Docs, Help, Tutorials)
- PWA install flow integration (Smart Install Prompt)
- Mobile-first responsive layout

---

## Project Structure

```
aiva-landing/
├── public/
│   └── assets/                # Static images, OG images, logos
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Top nav with mega menu
│   │   ├── PageLayout.tsx     # Shared page wrapper with footer
│   │   ├── SmartInstallPrompt.tsx   # PWA install modal
│   │   ├── ChainLogos.tsx     # Supported chain logo strip
│   │   └── ai-character-3d.tsx  # 3D VRM AI character (Three.js)
│   ├── hooks/
│   │   ├── useSmartInstallPrompt.ts  # Install prompt logic
│   │   └── use-toast.ts       # Toast hook
│   ├── pages/
│   │   ├── landing.tsx        # Main landing page (hero, features, CTA)
│   │   ├── usecases/          # Use case detail pages
│   │   │   ├── personal.tsx
│   │   │   ├── business.tsx
│   │   │   ├── developer.tsx
│   │   │   ├── student.tsx
│   │   │   └── trader.tsx
│   │   ├── blockchain/        # Blockchain feature pages
│   │   │   ├── base.tsx
│   │   │   ├── bridge.tsx
│   │   │   ├── contracts.tsx
│   │   │   ├── history.tsx
│   │   │   └── wallet.tsx
│   │   └── resources/         # Resource pages
│   │       ├── blog.tsx
│   │       ├── changelog.tsx
│   │       ├── community.tsx
│   │       ├── docs.tsx
│   │       ├── help.tsx
│   │       └── tutorials.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx                # Landing router
│   ├── main.tsx
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Design System

Same as `aiva-frontend`:

| Token | Value |
|---|---|
| Background | `#0a0a14` / `#0a0a1a` |
| Accent Indigo | `#6366f1` |
| Accent Cyan | `#06b6d4` |
| Card style | `bg-white/5 border border-white/10` glass-morphism |
| Font body | Inter |
| Font mono | JetBrains Mono |

---

## Quick Start

```bash
git clone https://github.com/aiva-labs/aiva-landing.git
cd aiva-landing
npm install

cp .env.example .env
# Set VITE_APP_URL and VITE_API_URL

npm run dev
```

---

## Related Repos

| Repo | Role |
|---|---|
| [aiva-frontend](https://github.com/aiva-labs/aiva-frontend) | PWA dashboard |
| [aiva-backend](https://github.com/aiva-labs/aiva-backend) | API server |
| [aiva-docs](https://github.com/aiva-labs/aiva-docs) | Documentation site |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 5174 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | TypeScript type check |
