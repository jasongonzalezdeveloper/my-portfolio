# my-portfolio

Jason González's personal/freelance portfolio — a bilingual (EN/ES), light/dark, accessibility-first single-page site built to support frontend/full-stack client work.

## Stack

- **Next.js 16** (App Router, static export via `output: "export"`)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (CSS-first config — theme tokens live in `src/app/globals.css`, not a `tailwind.config.js`)
- **Framer Motion** for scroll-reveal and micro-interactions (all gated behind `prefers-reduced-motion`)
- **i18next / react-i18next** for client-side EN/ES translation (no routing — a single page, language toggled and persisted in `localStorage`)

## Folder structure

```
src/
  app/            Root layout, home page, global CSS, and metadata routes
                   (sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx)
  components/
    layout/       Header, Footer, MobileMenu, ThemeToggle, LanguageSwitcher, ColorblindToggle
    sections/     One component per page section (Hero, About, Experience, Skills,
                   Services, Projects, Testimonials, Learning, Contact)
    ui/           Reusable primitives (GlassCard, SectionWrapper, TechBadge, ProjectCard, ...)
  context/        ThemeContext (light/dark) and LanguageContext (en/es)
  hooks/          useTheme-adjacent hooks: useReducedMotion, useColorblindMode, useTypingAnimation
  lib/            i18n.ts (i18next setup), assetPath.ts (GitHub Pages basePath helper)
  locales/        en/translation.json, es/translation.json — single namespace each, keys mirrored 1:1
  types/          Shared TypeScript interfaces for all section data (ProjectItem, ServiceItem, ...)
public/
  cv/             CV PDF served for the "Download CV" button (see Environment below)
  icons/          PWA icon(s)
  images/         Project screenshots
```

Section data (experience entries, projects, skills, services, learning topics) is defined as plain constant arrays inside each section component — there's no CMS or database, content changes are code changes.

## Theming

Light/dark theme is implemented with CSS custom properties: semantic tokens (`--bg`, `--text`, `--accent`, ...) are defined on `:root` (dark, the default) and overridden under `:root[data-theme="light"]` and `@media (prefers-color-scheme: light)`. Tailwind's `@theme` block in `globals.css` maps utility classes (`bg-bg`, `text-accent`, ...) to these variables, so switching `data-theme` on `<html>` re-themes the whole page without a rebuild. A small inline script in `layout.tsx`'s `<head>` sets the correct theme before first paint to avoid a flash. Theme choice is persisted to `localStorage` (`portfolio-theme`) via `ThemeContext`, mirroring how `LanguageContext` persists the language choice.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_CALENDLY_URL` | Booking link shown as a CTA in the Contact section. Omitting it hides the button. |
| `NEXT_PUBLIC_GOATCOUNTER_URL` | GoatCounter counter URL (e.g. `https://<code>.goatcounter.com/count`) for privacy-friendly analytics. Omitting it disables analytics entirely — no script is rendered. |

For the GitHub Pages deploy, these are read from **repository variables** (Settings → Secrets and variables → Actions → Variables), not `.env.local` — see `.github/workflows/deploy.yml`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`: it builds the static export (`next build` with `output: "export"`) with a `basePath` computed from `GITHUB_REPOSITORY`, then publishes `out/` to GitHub Pages. There's no custom domain configured — the live URL is `https://jasongonzalezdeveloper.github.io/my-portfolio/`.

## Known limitations

- **`<html lang>`**: the site is a client-side-only i18n toggle (no per-locale routing), so the server-rendered `lang` attribute is always `"en"`; it's corrected to the active locale on mount via `LanguageContext`. A fully server-correct `lang` would require Next.js i18n routing, which is out of scope for a one-page portfolio.
- **PWA icons**: `public/icons/icon.svg` is a simple placeholder monogram. Real branded PNG icons (192/512/maskable) haven't been generated yet.
- **CV**: served from `public/cv/`. The download buttons in the header and hero point at that exact filename — if the CV is ever replaced, update the `CV_URL` constant in `Hero.tsx` and `Header.tsx` to match.
