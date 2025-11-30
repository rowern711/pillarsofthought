# Pillars of Thought

A static, data-driven rebuild inspired by the aesthetic of Philosophy Bro. The page is driven by a JSON feed so you can quickly swap posts without touching the layout.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000 in a browser.

## Update content

Edit `data/pillars.json` to add, remove, or reorder posts. Each entry supports:

- `pillar`: Theology, Philosophy, Policy, or History
- `title`: Headline text
- `excerpt`: Short paragraph
- `tags`: Array of tags rendered as chips
- `mood`: One-line tone setter displayed in the topline
- `updated`: Friendly date stamp (any text)

Buttons across the top filter the rendered posts by pillar. All styling lives in `css/styles.css`; the rendering logic is in `js/script.js`.
