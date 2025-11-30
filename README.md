# Pillars of Thought

A static Jekyll rebuild inspired by the aesthetic of Philosophy Bro, but fully rebranded for Pillars of Thought. Markdown posts drive every card and detail.

## Run locally with Jekyll

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000 in a browser. Everything is GitHub Pages compatible—just push to `main` and enable Pages.

## Update content

Add Markdown files to `_posts/` in the standard `YYYY-MM-DD-title.md` format. Front matter supports:

- `pillar`: Theology, Philosophy, Policy, or History
- `mood`: One-line tone setter displayed in the topline
- `tags`: Array of tags rendered as chips

Buttons across the top filter the rendered posts by pillar. Each pillar also has its own landing page (`/theology/`, `/philosophy/`, `/policy/`, `/history/`). All styling lives in `css/styles.css`; the rendering logic is in `js/script.js`.
