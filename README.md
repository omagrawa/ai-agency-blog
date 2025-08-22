# smsidea.in Blog (Jekyll on GitHub Pages)

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

## Navigation
Edit `_data/nav.yml` to control header/footer menus. Use `nav_weight` in page front‑matter for sorting if desired.

## Search
- Client-side Lunr.js
- Index generated at build by `/assets/search.json`
- UI at `/search/`

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
- Keep `CNAME` with `smsidea.in` or `blog.smsidea.in`
- GitHub → Settings → Pages → Deploy from a branch → `main` / `(root)`
- Enable "Enforce HTTPS" after certificate is issued

## Notes
- Only GitHub Pages–allowed plugins are used: `jekyll-feed`, `jekyll-sitemap`
- Single CSS: `assets/css/main.css`; dark mode toggle included
