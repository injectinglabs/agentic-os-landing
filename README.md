# Agentic OS — Landing

Marketing site for **Agentic OS** by Injecting.ai. Sleek dark SaaS, "blueprint
for intelligence" aesthetic built around the hexagonal-cube logo.

## Stack
Vite + React 19 + TypeScript + Tailwind CSS 3 + Framer Motion (`motion`).
Fonts: Clash Display (display) · Satoshi (body) · JetBrains Mono (technical labels).

## Run
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/
npm run preview   # serve the production build
```

## Sections
Nav · Hero (animated tool-orbit) · Channel marquee · Features (bento) ·
How it works (3 steps) · Integrations · Pricing (Lite/Pro/Pro Plus/Team,
monthly↔yearly toggle) · CTA · Footer.

Content lives in `src/data.ts` — plans, channels, integrations and feature copy
are all editable there. CTAs point at `APP_URL` (https://aos.injecting.ai/app).

## Notes
- The logo (`public/logo.svg`) is the theme-adaptive mark; `logo.png` /
  `logo-navy.png` are the light / navy rasters.
- `Reveal` has a 1.2s mount fallback so content is never stranded at opacity:0
  if IntersectionObserver doesn't fire (crawlers / no-scroll prerender).
- Not yet wired to hosting or a git repo — standalone, ready to drop into
  `AgentOS-landing` or deploy via Amplify/Vercel/static host.
