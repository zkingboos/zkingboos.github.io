# zkingboos.github.io — Portfolio

> **Engineering Portfolio of José Gabriel (AKA `zkingboos`)**
> *Software Engineer · Backend · Infrastructure & Distributed Systems*

---

## Overview

This repository powers the official engineering portfolio of **José Gabriel (`zkingboos`)**, hosted at [`joseg.xyz`](https://joseg.xyz) (GitHub Pages via GitHub Actions, source branch `master`).

The portfolio was migrated from a static monolithic HTML build to a **Vite + React + TypeScript** application, showcasing 14 years of software engineering work (2013 — Present) with a dark cyber-industrial aesthetic and electric cyan accent (`#09a6d6`).

Key characteristics:

- **Vite + React 18 + TypeScript** with Tailwind CSS (build pipeline, no CDN).
- **Full i18n (pt/en)** via `react-i18next` — every visible text translates, including data (career, projects, open source). Testimonials stay in their original language.
- **Lenis smooth scrolling** (`autoRaf`) wired as a hook.
- **Interactive pieces**: draggable microservices topology modal (Affiliate), live GitHub contributions heatmap, seamless tech marquee slider (39 SVG icons), animated about-wave, testimonial masonry with scroll-spy on mobile.
- **CV page** at `/cv` — LinkedIn-style light layout with "Download PDF" via `react-to-print`; supports `?lang=pt|en` query param (fallback `en`).
- **Contact form** via Web3Forms (no backend required).

---

## Tech Stack

| Layer | Tools |
| :--- | :--- |
| Build | Vite 5, TypeScript, Tailwind CSS 3 |
| UI | React 18, react-router-dom |
| i18n | i18next, react-i18next |
| Data fetching | Native `fetch` (GitHub contributions API), TanStack Query available |
| Scroll | lenis |
| Print | react-to-print |
| Tests | Vitest + Testing Library |
| Deploy | GitHub Actions → GitHub Pages |

---

## Quick Start

```bash
bun install          # install dependencies
bun run dev          # dev server at http://localhost:8080
bun run build        # production build to dist/
bun run preview      # serve dist/ locally
bun run test         # run vitest suite
```

---

## Project Structure

```
src/
  components/
    layout/            # Header, Footer pieces
    sections/          # Hero, Career, ProductionArtifacts, LowLevelRoots,
                       # Testimonials, Contact, ContactForm
    topology/          # AffiliateTopologyModal (draggable)
  data/                # Single source of truth (bilingual {en, pt}):
                       # career, projects, testimonials, openSource, personal
  hooks/               # useLiveClock, useDragPan
  lib/                 # i18n init, lenis, lang helpers
  locales/             # pt.json, en.json
  pages/               # Index (/), CvPage (/cv), NotFound
public/                # images, favicon, robots.txt, CNAME
docs/                  # documentation suite (this folder)
```

**Data rule:** `src/data/*.ts` is the single source of truth for site and CV content. All changes happen there; both surfaces reflect them automatically. `src/data/data.test.ts` enforces the contract.

---

## Pages

| Route | Description |
| :--- | :--- |
| `/` | Main portfolio (hero, tech slider, timeline, shipped systems, low-level roots + bento grid, testimonials, contact + form) |
| `/cv` | Resume page (LinkedIn-style light layout, `?lang=pt|en` supported, PDF download) |

---

## Core Rules

1. **Zero-Emoji Policy**: no emojis in the codebase (HTML, JS, CSS, i18n text). Use clean SVGs or monospace symbols (`->`, `·`, `[ ]`).
2. **Palette**: electric cyan `#09a6d6` on dark obsidian surfaces. Purple/violet palettes are rejected.
3. **Single source of truth**: content lives in `src/data/*.ts`; UI strings live in `src/locales/*.json`. Never hardcode user-facing text in components.
4. **Deploy**: push to `master` triggers GitHub Actions (bun install → bun run build → publish `dist/`). `CNAME` must stay in `public/`.

---

## Documentation Suite

| Document | Description |
| :--- | :--- |
| [**`ARCHITECTURE.md`**](./ARCHITECTURE.md) | Technical architecture notes. |
| [**`DESIGN_SYSTEM.md`**](./DESIGN_SYSTEM.md) | Design tokens, palette, typography, responsive rules. |
| [**`CAREER_AND_PROJECTS.md`**](./CAREER_AND_PROJECTS.md) | Career milestones and shipped systems dossier. |
| [**`AI_AGENT_HANDOFF.md`**](./AI_AGENT_HANDOFF.md) | Directives and constraints for AI-driven iterations. |
| [**`plans/`**](./plans/) | Implementation plans and historical specs. |
| [**`superpowers/`**](./superpowers/) | Specs and plans from the React migration and CV page. |

---

## Contact & Links

- **Website**: [`https://joseg.xyz`](https://joseg.xyz)
- **GitHub**: [`@zkingboos`](https://github.com/zkingboos)
- **Email**: [`josegmelo.dev@gmail.com`](mailto:josegmelo.dev@gmail.com)
- **LinkedIn**: [`linkedin.com/in/josegabrielma`](https://www.linkedin.com/in/josegabrielma/)