# StreamHub Premium

A premium, Apple-inspired digital subscription marketplace homepage, built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- **Hero** with a scroll-driven signature animation — floating glass cards representing each subscription service converge into a single stack as you scroll, dramatizing "all your subscriptions, one place."
- **Featured services grid** (Netflix, Prime Video, Spotify, YouTube Premium, Disney+ Hotstar, ChatGPT Plus, Microsoft 365) with hover-lift cards, pricing, and benefit lists.
- **Why Choose Us** feature grid (instant delivery, secure payments, 24/7 support, verified accounts, affordable pricing, fast activation).
- **Animated stats counters** that count up on scroll into view.
- **Pricing section** with category filtering (Streaming / Music / Productivity / AI Tools) and glass cards that reveal benefits on hover.
- **Testimonials carousel** with star ratings and slide transitions.
- **FAQ accordion** with smooth expand/collapse.
- **Contact form** (Name, Email, WhatsApp, Service Required) and a floating WhatsApp button.
- **Sticky glass navbar** that condenses on scroll, with a working dark/light mode toggle (persisted to localStorage, dark by default).
- **Premium loading screen** on first paint.
- Fully responsive, keyboard-focus-visible, and respects prefers-reduced-motion.

## What's intentionally stubbed (UI-only, as requested)

- **Contact form** shows a success state on submit but does not send anywhere yet. Wire it to an API route, email service, or CRM inside `src/components/sections/contact.tsx` (`handleSubmit`).
- **"Buy Now" / "Choose Plan" buttons** are styled and interactive but don't trigger checkout. To add real payments:
  - **Stripe**: create an API route (e.g. `src/app/api/checkout/route.ts`) that creates a Checkout Session server-side, then redirect the client to the returned URL.
  - **Razorpay**: similarly, create an order server-side and open Razorpay's checkout modal client-side with the order ID.
  - Never put secret keys in client components — they belong in server-only API routes, read from environment variables.
- **WhatsApp button** links to https://wa.me/910000000000 — replace with your real business number.

## Design tokens

Brand colors are defined in `src/app/globals.css` under `@theme` (Tailwind v4 syntax) and as CSS variables for light/dark mode:

| Token | Hex |
|---|---|
| Pure White | #FFFFFF |
| Matte Black | #0A0A0A |
| Space Gray | #1C1C1E |
| Apple Blue | #0071E3 |
| Soft Silver | #F5F5F7 |

Typeface is Inter, loaded via next/font/google in src/app/layout.tsx. It's the open-source typeface closest to SF Pro Display's grotesque-neutral proportions (SF Pro itself is licensed exclusively to Apple and can't be embedded on third-party sites).

## A note on the business model

This site markets discounted access to third-party subscription services (Netflix, Spotify, Disney+, ChatGPT Plus, Microsoft 365, etc.). Reselling shared logins or slots on accounts licensed per-household/per-seat is against most of these providers' terms of service. Worth reviewing with legal counsel before launch — you may want to reframe copy around bundling legitimately-licensed multi-user plans, or clarify your actual sourcing model, to avoid account suspensions or disputes with users down the line.

## Project structure

```
src/
  app/
    layout.tsx       — root layout, font, metadata, theme provider
    page.tsx         — homepage assembly
    globals.css      — design tokens, dark mode, utilities
  components/
    ui/              — Button, GlassCard, Reveal (scroll-trigger wrapper)
    sections/        — Navbar, Hero, FeaturedServices, WhyChooseUs, Stats,
                        Pricing, Testimonials, FAQ, Contact, Footer, WhatsAppButton
    theme-provider.tsx
    loading-screen.tsx
  data/
    services.ts       — subscription catalog (edit prices/benefits here)
    content.ts         — testimonials and FAQ copy
```

## Logos

Service "logos" are styled initials on brand-colored tiles rather than the official trademarked logo assets, to avoid unauthorized use of third-party IP. Swap in licensed logo assets in src/data/services.ts / featured-services.tsx if you have permission to use them.
