# Pillars of Thought

A static, data-driven landing page for the four pillars: theology, philosophy, policy, and history. Styling mirrors the parchment-and-crest aesthetic of the original inspiration while keeping all content editable.

## Run locally (Jekyll)

```bash
bundle exec jekyll serve
```

Open http://localhost:4000 (or the forwarded port) to view the site.

To preview without Ruby installed, you can still use a simple static server:

```bash
python -m http.server 8000
```

## Update content

Edit `data/pillars.json` to add, remove, or reorder posts. Each entry supports:

- `pillar`: Theology, Philosophy, Policy, or History
- `title`: Headline text
- `excerpt`: Short paragraph
- `tags`: Array of tags rendered as chips
- `mood`: One-line tone setter displayed in the topline
- `updated`: Friendly date stamp (any text)

Buttons across the top filter the rendered posts by pillar. All styling lives in `css/styles.css`; the rendering logic is in `js/script.js`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In your repository settings, enable GitHub Pages with the `main` branch as the source.
3. If you publish to a project site, set `baseurl` in `_config.yml` to your repository name (for example, `/pillarsofthought`). Asset and data paths already use `relative_url` so they will resolve correctly once `baseurl` is set.
