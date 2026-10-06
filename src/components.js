// src/components.js
async function loadComponent(id, path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(res.status + " " + path);
    document.getElementById(id).innerHTML = await res.text();
  } catch (err) {
    console.error("Component failed:", err);
  }
}

async function init() {
  await Promise.all([
    loadComponent("header", "/components/header.html"),
    loadComponent("footer", "/components/footer.html"),
  ]);

  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isHidden = menu.classList.toggle("hidden");
      btn.setAttribute("aria-expanded", String(!isHidden));
    });
  }
}

init();
