# Pillars of Thought

A static, data-driven landing page for the four pillars: theology, philosophy, policy, and history. Styling mirrors the parchment-and-crest aesthetic of the original inspiration while keeping all content editable.

## Run locally (Jekyll)

```bash
bundle exec jekyll serve
```

Open http://localhost:4000 (or the forwarded port) to view the site.

To preview without Ruby installed, build once with Jekyll (for example on GitHub Pages) and then serve the generated `_site` folder with a simple static server:

```bash
python -m http.server 8000 --directory _site
```

## Update content

Add or edit Markdown files in `_posts/` (for example, `2024-05-06-history-field-notes.md`). Front matter powers the homepage and pillar pages, and each post builds its own permalinked page via the `post` layout.

Required front matter keys:

- `pillar`: Theology, Philosophy, Policy, or History (used for filtering)
- `title`: Headline text
- `mood`: One-line tone setter displayed in the topline
- `tags`: Array of tags rendered as chips

The file name controls the publish date shown under "Updated". The excerpt is pulled from the first paragraph of the Markdown body. Buttons across the top filter the rendered posts by pillar, and you can deep-link to `/theology/`, `/philosophy/`, `/policy/`, or `/history/` to share a single pillar. All styling lives in `css/styles.css`; the rendering logic is in `js/script.js`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In your repository settings, enable GitHub Pages with the `main` branch as the source.
3. If you publish to a project site, set `baseurl` in `_config.yml` to your repository name (for example, `/pillarsofthought`). Asset and data paths already use `relative_url` so they will resolve correctly once `baseurl` is set.
