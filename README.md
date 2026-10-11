# Zakaria Zaouri — Digital Atelier

A personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Three.js.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (custom design tokens)
- **Animation**: Framer Motion
- **3D Hero**: Three.js + React Three Fiber + Drei (lazy-loaded, ~247 KB gzipped)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages / GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── hero/
│   │   ├── ThreeHeroInstallation.tsx  # Lazy-loaded R3F scene
│   │   └── index.ts                   # Lazy wrapper
│   ├── layout/
│   │   ├── Navigation.tsx             # Fixed nav + scroll progress
│   │   └── Footer.tsx
│   ├── motion/
│   │   └── ScrollProgress.tsx         # (unused — nav has inline version)
│   └── projects/
│       └── ProjectCard.tsx            # Museum-style project cards
├── data/
│   ├── projects.ts                    # Gallery data (ordered by importance)
│   ├── case-studies.ts                # Full case study content
│   ├── experience.ts
│   └── skills.ts
├── hooks/
│   └── useReducedMotion.ts            # Respects OS accessibility setting
├── pages/
│   └── ProjectPage.tsx                # Dedicated case study routes
├── sections/
│   ├── Hero.tsx                       # Three.js installation + typography
│   ├── SelectedWork.tsx               # Asymmetric museum gallery
│   ├── About.tsx                      # Portrait + narrative
│   ├── Experience.tsx                 # Timeline with CNESTEN + ABIRNET
│   ├── Skills.tsx                     # Categorized skill groups
│   ├── Achievements.tsx               # Competition + certifications
│   └── Contact.tsx                    # CV downloads (EN + FR) + links
├── App.tsx                            # React Router setup
├── main.tsx
└── index.css                          # Design tokens + global styles
public/
├── favicon.svg
├── cv-en.pdf                          # English CV
├── cv-fr.pdf                          # French CV
└── robots.txt
```

## Features

### 🎨 Museum/Gallery Design
- Each project displayed as a curated "exhibition piece" with unique CSS/SVG artwork
- Alternating asymmetric layouts (artwork left/right)
- Exhibition labels, year badges, and piece numbers
- Hover overlays with GitHub links
- Clickable "View Case Study" links to full detail pages

### 🖼️ Three.js Hero Installation
- Lazy-loaded (separate chunk: 247 KB gzipped)
- Interactive particle rings with 4 orbital layers
- Glowing core orb with dynamic lighting
- Connection lines radiating from center
- Auto-rotating with OrbitControls
- **Respects `prefers-reduced-motion`** — falls back to static CSS orb
- Graceful loading fallback (pulsing orb)

### 📄 Project Case Studies
- Dedicated route: `/work/:slug` (e.g., `/work/drone-detection`)
- Full architecture diagrams (ASCII code blocks)
- Challenges & trade-offs sections
- Key features with accent-colored checkmarks
- Previous/Next navigation between projects
- Direct navigation from URL (shareable)

### 📥 CV Downloads
- English CV: `/cv-en.pdf`
- French CV: `/cv-fr.pdf`
- Download buttons in Contact section + Footer

### 🧭 Navigation
- Scroll progress bar (gradient: ember → orchid → lime)
- Active section highlighting
- Smart cross-route navigation (from case study → home section)
- Mobile slide-in menu with staggered links

### ♿ Accessibility
- Semantic HTML with ARIA labels
- Keyboard-navigable
- Visible focus indicators
- `prefers-reduced-motion` respected everywhere
- Sufficient color contrast (soft white on obsidian)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Cloudflare Pages (Recommended) — 2-minute setup

1. Go to https://dash.cloudflare.com/pages
2. Click **"Create a project"** → **Connect to Git**
3. Select your repo: `ZrZakaria/-digital-atelier`
4. Cloudflare auto-detects Vite — confirm these settings:
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Root directory**: `/`
5. Click **Save and Deploy**

Your live site will be at: `https://digital-atelier.pages.dev`

#### Optional: Custom domain
In Cloudflare Pages → **Custom domains** → add your domain. Cloudflare provisions free SSL automatically.

### GitHub Pages
1. Enable Pages in repo settings → Source: GitHub Actions
2. Push to `main` branch — workflow auto-deploys
3. Workflow file: `.github/workflows/deploy.yml`

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| Obsidian | `#101014` | Page background |
| Charcoal | `#19191F` | Section backgrounds |
| Surface | `#1E1E26` | Card backgrounds |
| Ember | `#FF5C35` | Primary accent (drone detection) |
| Cobalt | `#365CFF` | Secondary accent (thinkboard, hero) |
| Lime | `#D9FF3F` | Tertiary accent (springstore, cnesten) |
| Orchid | `#E34AFF` | Quaternary accent (labproof) |
| Soft White | `#F3F0EB` | Primary text |
| Muted | `#8A8A9A` | Secondary text |
| Muted Dim | `#5A5A6A` | Tertiary text |

## Typography

- **Display**: Space Grotesk — editorial, geometric, distinctive
- **Body**: Inter — clean, highly legible
- **Mono**: JetBrains Mono — technical metadata, code, labels

## Verified Content Sources

All project descriptions, technologies, and achievements are verified against:
- `CV/english_cv/Zakaria_ZAOURI.tex` (CV)
- `PROJECT_DOCUMENTATIONS/*/` (16 analyzed repositories)
- GitHub: https://github.com/ZrZakaria

## Limitations & Open Tasks

- [ ] Add real project screenshots (currently using abstract CSS/SVG artwork)
- [ ] Consider adding a hero Lottie or GIF if you have project screencasts
- [ ] Test with real screen reader (NVDA / VoiceOver)
- [ ] Run Lighthouse audit after deployment for final performance scores
- [ ] Update `robots.txt` sitemap URL with production domain

## License

MIT
