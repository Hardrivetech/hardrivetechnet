# HardriveTech — Personal Portfolio Site

A fast, modern personal portfolio for an independent systems/software engineer
(`hardrivetech.net`), built with **SvelteKit**, **Svelte 5** (runes),
**TypeScript**, and **Tailwind CSS v4**.

## Stack

- **SvelteKit** — routing, layouts, full static prerendering (`adapter-static`, `prerender = true`)
- **Svelte 5** — runes (`$state`, `$derived`, `$props`, `$effect`) throughout
- **Tailwind CSS v4** — CSS-first theme (`src/app.css`), no config file needed
- **TypeScript** — fully typed data models and components
- **@fontsource-variable** — self-hosted Inter, Plus Jakarta Sans, JetBrains Mono

## Structure

```
src/
  app.html            # HTML shell
  app.css             # Tailwind import + theme tokens + base styles
  routes/
    +layout.svelte     # Nav + BackgroundFx + ScrollProgress + Footer shell
    +layout.ts         # prerender = true
    +page.svelte       # Assembles all sections + SEO/JSON-LD (Person schema)
    +error.svelte      # Themed 404 / error page
  lib/
    components/        # Nav, Hero, ProjectCard, ProjectsShowcase, TechStack,
                        # Now, About, ContactForm, Contact, Footer, Badge,
                        # SectionHeading, BackgroundFx, ScrollProgress
    data/               # site.ts, nav.ts, projects.ts, skills.ts, now.ts
    utils/              # accent.ts (accent color class mapping), clipboard.ts
```

## Content sections

1. **Hero** — first-person value proposition, CTAs, a `whoami`-style terminal
   panel, and a stat row with a bit of personality (see: "Corporate meetings
   attended: 0").
2. **Things I've Built** — 4 real, linked GitHub repos in a bento grid:
   CarnageEngine, Windows 10 Longevity Suite, piStereo, and t1dTracker
   (`src/lib/data/projects.ts`). Cards include a subtle cursor-following
   spotlight effect.
3. **Technical Expertise & Stack** — competency grid sourced directly from
   the tech actually used in the 4 showcased projects, plus this site's own
   web stack (`src/lib/data/skills.ts`).
4. **What I'm Building Right Now** — a small "now page"-style section
   listing what's actively in progress on each project, pulled from each
   repo's own roadmap/TODO notes (`src/lib/data/now.ts`).
5. **About Me** — personal background and engineering principles.
6. **Transmission / Contact** — real-time validated contact form (Svelte 5
   runes) + copy-to-clipboard email + a GitHub link.

The nav highlights the current section as you scroll (`IntersectionObserver`
+ `$state` in `Nav.svelte`), and a thin scroll-progress bar sits just below
the header.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build
npm run preview  # preview the production build
npm run check    # svelte-check + TypeScript
```

## Editing content

- Update your name, role, email, and GitHub link in `src/lib/data/site.ts`.
- Add/edit featured projects in `src/lib/data/projects.ts`.
- Add/edit skill categories in `src/lib/data/skills.ts`.
- Add/edit "what I'm building now" entries in `src/lib/data/now.ts`.
- Theme colors, fonts, and animations live in `src/app.css` under `@theme`.
- `static/og-image.svg` is the source of truth for social share previews;
  `static/og-image.png` is the rasterized copy actually referenced by
  `og:image`/`twitter:image` (regenerate with `npx sharp-cli -i
  static/og-image.svg -o static/og-image.png resize 1200 630` after editing
  the SVG). Favicons (`favicon.svg`, `favicon-16.png`, `favicon-32.png`,
  `apple-touch-icon.png`) follow the same pattern.

## Contact form

`src/lib/components/ContactForm.svelte` does real-time client-side validation
and submits to [Web3Forms](https://web3forms.com) — a free, backend-less form
delivery API (250 submissions/month on the free tier, no signup beyond email
verification).

To enable real submissions:

1. Get a free access key at https://web3forms.com.
2. Add it to `.env` (see `.env.example`):
   ```
   PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Restart the dev server. Submissions will POST to Web3Forms and land in
   your inbox.

If the key is left blank, the form falls back to a simulated submission so
the UI still works end-to-end during local development.

## Deploying to Cloudflare Pages

The site builds to a fully static `build/` directory via `@sveltejs/adapter-static`
(no server runtime required).

**Via the Cloudflare dashboard (GitHub integration):**

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and use these build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Framework preset:** SvelteKit (or leave as "None" — the settings above are
     all that's needed since this is a static export)
4. Add an environment variable if you want real contact form submissions:
   - `PUBLIC_WEB3FORMS_ACCESS_KEY` = your Web3Forms key
5. Deploy. Every push to your default branch redeploys automatically; PRs get
   preview deployments.
6. Add your custom domain (e.g. `hardrivetech.net`) under the Pages project's
   **Custom domains** tab once the first deploy succeeds.

**Via Wrangler CLI** (uses `wrangler.toml` in this repo, which points
`pages_build_output_dir` at `build`):

```bash
npm run build
npx wrangler pages deploy
```

`static/_headers` sets long-lived immutable caching for hashed `_app/immutable`
assets and fonts, and `static/404.html` provides a themed 404 page for
unmatched routes (both are Cloudflare Pages conventions, picked up
automatically from the build output).
