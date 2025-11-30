---
---
const postsContainer = document.getElementById("posts");
const tabs = Array.from(document.querySelectorAll(".pillar-tab"));

const postsData = [
  {% assign posts = site.posts | sort: 'date' | reverse %}
  {% for post in posts %}
  {
    title: {{ post.title | jsonify }},
    pillarLabel: {{ post.pillar | default: "Pillar" | jsonify }},
    pillarKey: {{ post.pillar | default: "pillar" | downcase | jsonify }},
    mood: {{ post.mood | default: "New" | jsonify }},
    updated: "{{ post.date | date: '%b %-d, %Y' }}",
    excerpt: {{ post.excerpt | strip_html | strip_newlines | jsonify }},
    tags: {{ post.tags | jsonify }}
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

function createPost(post) {
  const card = document.createElement("article");
  card.className = "post-card";
  const tags = Array.isArray(post.tags) ? post.tags : [];

  card.innerHTML = `
    <div class="post-topline">
      <span class="pill-label">${post.pillarLabel}</span>
      <span>${post.mood}</span>
      <span>Updated ${post.updated}</span>
    </div>
    <h3 class="post-title">${post.title}</h3>
    <p class="post-excerpt">${post.excerpt}</p>
    <div class="post-meta">
      ${tags.map((tag) => `<span class="meta-chip">${tag}</span>`).join("")}
    </div>
  `;
  return card;
}

function renderPosts(posts, filter) {
  postsContainer.innerHTML = "";
  const filtered =
    filter === "all"
      ? posts
      : posts.filter((p) => (p.pillarKey || "").toLowerCase() === filter);

  if (!filtered.length) {
    postsContainer.innerHTML = `<div class="post-card"><p class="post-excerpt">No posts yet for this pillar. Add a Markdown file in <code>_posts/</code> with <code>pillar</code>, <code>mood</code>, and <code>tags</code>.</p></div>`;
    return;
  }
  filtered.forEach((post) => postsContainer.appendChild(createPost(post)));
}

function setActiveTab(target) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab === target));
}

function init() {
  renderPosts(postsData, "all");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const pillar = tab.dataset.pillar;
      setActiveTab(tab);
      renderPosts(postsData, pillar);
    });
  });
}

init();
