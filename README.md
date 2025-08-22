# ripple.ai Blog (Jekyll on GitHub Pages)

Production-ready, modular blog for SMS Idea. Stack: Jekyll (GitHub Pages), vanilla CSS, no custom plugins.

## Run locally
1. Install Ruby + Bundler.
2. Install deps: `bundle install`
3. Serve: `bundle exec jekyll serve`
4. Open http://127.0.0.1:4000

## Add content
- Post: add Markdown to `_posts/YYYY-MM-DD-title.md` (layout: post)
- Case study: add to `_case_studies/*.md` (layout: collection)
- Service: add to `_services/*.md` (layout: collection)
- Landing: add to `_landing/*.md` (layout: page)
- Page: add to `pages/*.md` (layout: page)

### Pages (static)
1) Create `pages/<slug>.md`
2) Front matter:
```yaml
---
layout: page
lang: en
title: "Page Title"
description: "Short description"
nav_weight: 10
---
```
3) Add content below front matter.
4) Add to nav in `_data/nav.yml`:
```yaml
header:
  - title: "Page Title"
    url: /pages/<slug>/
    weight: 10
```

## Navigation
Edit `_data/nav.yml` to control header/footer menus. Use `nav_weight` in page front‑matter for sorting if desired.

## Search
- Client-side Lunr.js
- Index generated at build by `/assets/search.json`
- UI at `/search/`

## Multilingual (no plugins)
- Configure languages in `_config.yml`:
  ```yaml
  default_lang: en
  languages: [en, hi, fr, es]
  ```
- Each file declares its language via front matter: `lang: en|hi|fr|es`
- Create one file per language (e.g., `pages/about.md`, `pages/about.fr.md`)
- Optional cross-links for SEO `hreflang`:
  ```yaml
  translations:
    en: /pages/about/
    fr: /pages/about.fr/
    es: /pages/about.es/
    hi: /pages/about.hi/
  ```
- Search is language-aware; results are filtered to the selected language.

## Posts
1) Create `_posts/YYYY-MM-DD-slug.md`
2) Front matter:
```yaml
---
layout: post
lang: en
title: "Your Post Title"
description: "Short summary"
tags: [ai]
categories: [announcements]
---
```

## Collections
- Services: `_services/<slug>.md`
- Case studies: `_case_studies/<slug>.md`
- Landing: `_landing/<slug>.md`
```yaml
---
layout: collection
lang: en
title: "Title"
description: "Short"
---
```

## Tags
- `/tags/` lists all tags
- Create a tag page in `tags/<tag>.md` with:
  ```yaml
  ---
  layout: tag
  tag: your-tag
  title: "#your-tag"
  ---
  ```

## SEO & Social
- Edit site title/description in `_config.yml`
- Open Graph/Twitter handled by `_includes/seo-tags.html`

## Forms
- Replace Formspree endpoint in `_includes/form-contact.html`

## GA4
- Add your Measurement ID in `_config.yml` as `ga4_id`

## Domain
- Keep `CNAME` with `ripple.ai` or `blog.ripple.ai`
- GitHub → Settings → Pages → Deploy from a branch → `main` / `(root)`
- Enable "Enforce HTTPS" after certificate is issued

## Branding
- Header uses a logo if set in `_config.yml`:
  ```yaml
  logo: /assets/images/logo.svg
  ```
- Replace the file at `assets/images/logo.svg` (or point to PNG/JPG). Adjust height in `assets/css/main.css` `.brand img{ height:28px; }`.

## Notes
- Only GitHub Pages–allowed plugins are used: `jekyll-feed`, `jekyll-sitemap`
- Single CSS: `assets/css/main.css`; dark mode toggle included

## Optional Admin Panel (Decap CMS)
- Provides a web UI to edit posts/pages/collections and data.
- Two approaches:
  1) Host on Netlify and use Identity + Git Gateway (simplest)
  2) Stay on GitHub Pages and use a small GitHub OAuth proxy (Vercel/Render)
- Setup (to be added on request):
  - `admin/index.html` and `admin/config.yml`
  - Collections for: posts, pages, services, case_studies, landing, nav (`_data/nav.yml`), basic site settings (`_config.yml`)
  - You provide Netlify Identity or GitHub OAuth app creds.

---

# Deployment

## GitHub Pages (recommended for this repo)
1. Push to the `main` branch.
2. Ensure `CNAME` contains your domain (e.g., `blog.smsidea.in`).
3. Repo → Settings → Pages → Build and deployment:
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
4. Wait for build to finish. Enable "Enforce HTTPS" once the certificate is ready.

### DNS
- Point domain to GitHub Pages per GitHub docs.
- Keep the `CNAME` file in repo root with your domain.

## Alternative: Netlify
1. Import repo in Netlify → set Build command: `bundle exec jekyll build`
2. Publish directory: `_site`
3. Add environment vars: `JEKYLL_ENV=production` (optional).

---

# Configuration Reference (`_config.yml`)
- `title`, `description`, `url`, `baseurl`
- `logo`: path to header logo (e.g., `/assets/images/logo.svg`)
- `default_lang`: `en`
- `languages`: `[en, hi, fr, es]`
- `enable_translate_widget`: `true|false`
- `enable_search`: `true|false`
- `enable_darkmode`: `true|false`
- `ga4_id`: GA4 Measurement ID (optional)
- Collections: `case_studies`, `services`, `landing` are enabled and output with permalinks
- Plugins (GitHub Pages safe): `jekyll-feed`, `jekyll-sitemap`

---

# Directory Overview
- Content
  - `_posts/` blog posts
  - `_case_studies/` case studies
  - `_services/` services
  - `_landing/` landing pages
  - `pages/` static pages
  - `tags/` tag index pages
- Data and includes
  - `_data/nav.yml` navigation menus
  - `_data/site.yml` site metadata
  - `_includes/` partials (header, footer, seo-tags, breadcrumbs, post-card, pagination, form-contact, lang-switcher, translate-widget)
- Layouts
  - `_layouts/` base, home, page, post, collection, tag
- Assets
  - `assets/css/main.css` styles
  - `assets/js/` lunr.min.js, search.js, theme-toggle.js
  - `assets/images/` images, `logo.svg`
  - `assets/search.json` search index (Liquid + front matter)
- Root
  - `CNAME`, `Gemfile`, `README.md`, `_config.yml`, `index.html`, `manifest.webmanifest`

---

# PWA & Accessibility
- PWA-lite via `manifest.webmanifest` (no service worker by default)
- Accessible navigation: skip link, proper ARIA labels, focus outlines
- Dark mode: CSS variables + `theme-toggle.js`

---

# Troubleshooting
- __Liquid error in for loop__ (GitHub Pages): Use `for item in collection` and access `item[0]`/`item[1]` for key/value.
- __`assets/search.json` flagged by editor__: The source contains front matter; at runtime it renders valid JSON at `/assets/search.json`. Optionally rename to `search.json.liquid` and set `permalink: /assets/search.json`.
- __Wrong URLs locally__: If you set `baseurl`, use `{{ "..." | relative_url }}` in includes and layouts.
- __Search not loading__: Ensure `site.enable_search` is true and Lunr script is loaded (see `_layouts/base.html`).
- __Logo not showing__: Confirm `_config.yml` `logo:` path and that the image exists under `assets/images/`.

---

# Checklists

## Content Checklist
- [ ] Page created in `pages/` with `layout: page` and `lang`
- [ ] Post created in `_posts/` with `layout: post` and `lang`
- [ ] Collections files in their respective folders with `layout: collection`
- [ ] Translations added (per-language files) and optional `translations:` map
- [ ] Navigation updated in `_data/nav.yml`

## Pre-deploy Checklist
- [ ] `_config.yml` updated (title, url, baseurl, languages, logo)
- [ ] `CNAME` has the correct domain
- [ ] GA4 `ga4_id` set (optional)
- [ ] Formspree endpoint set in `_includes/form-contact.html`
- [ ] Placeholder images replaced (logo, og-default)

## Post-deploy Checklist
- [ ] HTTPS enforced in GitHub Pages
- [ ] Verify pages, posts, services, case studies, tags
- [ ] Search indexing and language filter working
- [ ] hreflang alternates present where `translations` provided

---

# Admin Panel Option (Decap CMS)
 - Netlify (Git Gateway) for simplest setup, or
 - GitHub Pages with GitHub OAuth proxy
 - posts, pages, services, case_studies, landing
 - `_data/nav.yml` and selected `_config.yml` fields
