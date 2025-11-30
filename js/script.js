const postsContainer = document.getElementById("posts");
const tabs = Array.from(document.querySelectorAll(".pillar-tab"));
const posts = Array.from(document.querySelectorAll(".post-card"));

function filterPosts(filter) {
  let visible = 0;
  posts.forEach((post) => {
    const matches = filter === "all" || post.dataset.pillar === filter;
    post.style.display = matches ? "block" : "none";
    if (matches) visible += 1;
  });

  if (!visible) {
    postsContainer.innerHTML = `<article class="post-card"><p class="post-excerpt">No posts yet for this pillar. Add a Markdown file in <code>_posts/</code> with <code>pillar: ${filter}</code>.</p></article>`;
  }
}

function setActiveTab(target) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab === target));
}

function init() {
  filterPosts("all");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const pillar = tab.dataset.pillar;
      postsContainer.innerHTML = "";
      posts.forEach((post) => postsContainer.appendChild(post));
      setActiveTab(tab);
      filterPosts(pillar);
    });
  });
}

init();
