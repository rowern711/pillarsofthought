---
---
const postsContainer = document.getElementById("posts");
const tabs = Array.from(document.querySelectorAll(".pillar-tab"));
const dataUrl = "{{ '/data/pillars.json' | relative_url }}";

async function fetchPosts() {
  try {
    const res = await fetch(dataUrl);
    if (!res.ok) throw new Error("Failed to load pillar data");
    const { posts } = await res.json();
    return posts;
  } catch (err) {
    console.error(err);
    postsContainer.innerHTML = `<div class="post-card"><p class="post-excerpt">Unable to load posts. Check that <code>data/pillars.json</code> exists.</p></div>`;
    return [];
  }
}

function createPost(post) {
  const card = document.createElement("article");
  card.className = "post-card";
  card.innerHTML = `
    <div class="post-topline">
      <span class="pill-label">${post.pillar}</span>
      <span>${post.mood}</span>
      <span>Updated ${post.updated}</span>
    </div>
    <h3 class="post-title">${post.title}</h3>
    <p class="post-excerpt">${post.excerpt}</p>
    <div class="post-meta">
      ${post.tags.map((tag) => `<span class="meta-chip">${tag}</span>`).join("")}
    </div>
  `;
  return card;
}

function renderPosts(posts, filter) {
  postsContainer.innerHTML = "";
  const filtered = filter === "all" ? posts : posts.filter((p) => p.pillar.toLowerCase() === filter);
  if (!filtered.length) {
    postsContainer.innerHTML = `<div class="post-card"><p class="post-excerpt">No posts yet for this pillar. Add one in <code>data/pillars.json</code>.</p></div>`;
    return;
  }
  filtered.forEach((post) => postsContainer.appendChild(createPost(post)));
}

function setActiveTab(target) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab === target));
}

async function init() {
  const posts = await fetchPosts();
  renderPosts(posts, "all");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const pillar = tab.dataset.pillar;
      setActiveTab(tab);
      renderPosts(posts, pillar);
    });
  });
}

init();
