# Kaustubh Raut — UX Portfolio

Personal portfolio website showcasing UI/UX case studies and design work. Built with React, TypeScript, and Tailwind CSS.

## Live Site

> Add your deployed URL here (Vercel / Netlify / GitHub Pages)

## Features

- Case study pages with detailed project breakdowns
- Filterable work section with project cards
- Interactive hero section with animations (Framer Motion + Lottie)
- Contact section
- Dark/light theme support
- Fully responsive

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion, Lottie React |
| Routing | React Router v6 |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Package Manager | Bun |

## Project Structure

```
src/
├── pages/
│   ├── Index.tsx          # Home / landing
│   ├── About.tsx          # About me
│   ├── CaseStudy.tsx      # Dynamic case study page
│   └── NotFound.tsx       # 404
├── components/
│   ├── Hero.tsx
│   ├── HeroInteractive.tsx
│   ├── Navigation.tsx
│   ├── NavLink.tsx
│   ├── Work.tsx
│   ├── ProjectCard.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/                # shadcn/ui primitives
├── data/
│   └── projects.ts        # Case study content
├── hooks/
└── lib/
```

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Case Studies

Case study content is managed in `src/data/projects.ts`. Each project object drives the dynamic `/case-study/:id` route.

## Deployment

The project is a standard Vite SPA. Deploy to any static host:

- **Vercel** — connect repo, auto-detects Vite
- **Netlify** — build command: `bun run build`, publish dir: `dist`
- **GitHub Pages** — requires `base` config in `vite.config.ts`

---

Designed & built by [Kaustubh Raut](https://github.com/kaustubhraut89)
