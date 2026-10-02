/* =====================================================================
   main.js  —  reads js/data.js and builds the page.
   You normally do NOT need to edit this file.
   ===================================================================== */

(function () {
  const P = window.PORTFOLIO;

  // Small helper: "el('div', 'card', '<p>hi</p>')" makes <div class="card"><p>hi</p></div>
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  // Helper: put items inside a container by its id
  function fill(id, nodes) {
    const box = document.getElementById(id);
    nodes.forEach((n) => box.appendChild(n));
  }

  // ---------- Your name everywhere ----------
  document.querySelectorAll('[data-fill="name"]').forEach((n) => (n.textContent = P.name));
  document.title = P.name + " | Software, AI and Data Portfolio";

  // ---------- Hero photo: show initials if the photo file is missing ----------
  const img = document.getElementById("profile-img");
  const frame = img.parentElement;
  const initials = P.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  document.getElementById("photo-fallback").textContent = initials;
  img.addEventListener("error", () => frame.classList.add("no-photo"));
  if (img.complete && img.naturalWidth === 0) frame.classList.add("no-photo");

  // ---------- Marquee: every skill, repeated twice so the loop has no gap ----------
  const allSkills = P.skills.flatMap((g) => g.items);
  const marquee = document.getElementById("marquee-track");
  [...allSkills, ...allSkills].forEach((s) => marquee.appendChild(el("span", "", s)));

  // ---------- About ----------
  document.getElementById("about-bio").textContent = P.bio;
  document.getElementById("about-roles").textContent = P.roles.join(", ");
  document.getElementById("about-location").textContent = P.location;
  fill("education-list", P.education.map((e) =>
    el("div", "edu-item", `<h4>${e.title}</h4><p>${e.period}</p><p>${e.detail}</p>`)
  ));

  // ---------- Projects ----------
  fill("project-grid", P.projects.map((p) => {
    const card = el("article", "card");
    const buttons = [
      p.github && `<a class="btn btn-line btn-small" href="${p.github}" target="_blank" rel="noopener">Code</a>`,
      p.kaggle && `<a class="btn btn-line btn-small" href="${p.kaggle}" target="_blank" rel="noopener">Kaggle</a>`,
      p.demo   && `<a class="btn btn-clay btn-small" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>`
    ].filter(Boolean).join("");

    card.innerHTML = `
      <div class="card-top"><span>${p.category}</span></div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        ${buttons ? `<div class="card-links">${buttons}</div>` : ""}
      </div>`;
    return card;
  }));

  // ---------- Experience ----------
  fill("experience-list", P.experience.map((j) =>
    el("div", "job", `
      <h3>${j.title}</h3>
      <p class="org">${j.org}</p>
      <p class="period">${j.period}</p>
      <ul>${j.points.map((x) => `<li>${x}</li>`).join("")}</ul>`)
  ));

  // ---------- Skills ----------
  fill("skill-grid", P.skills.map((g) =>
    el("div", "skill-card", `
      <h3>${g.group}</h3>
      <div class="chips">${g.items.map((i) => `<span class="chip">${i}</span>`).join("")}</div>`)
  ));

  // ---------- Profile links ----------
  fill("link-grid", P.links.map((l) => {
    const a = el("a", "link-card", `<strong>${l.label}</strong><span>${l.handle}</span><small>${l.note}</small>`);
    a.href = l.url; a.target = "_blank"; a.rel = "noopener";
    return a;
  }));

  // ---------- FAQ (uses the browser's built-in open/close, no JS needed) ----------
  fill("faq-list", P.faq.map((f) => {
    const d = el("details", "");
    d.innerHTML = `<summary>${f.q}</summary><p>${f.a}</p>`;
    return d;
  }));

  // ---------- Contact + footer ----------
  document.getElementById("contact-availability").textContent = P.availability;
  document.getElementById("contact-mail").href = "mailto:" + P.email;
  const footer = document.getElementById("footer-links");
  P.links.forEach((l) => {
    const a = el("a", "", l.label);
    a.href = l.url; a.target = "_blank"; a.rel = "noopener";
    footer.appendChild(a);
  });
  const mail = el("a", "", P.email);
  mail.href = "mailto:" + P.email;
  footer.appendChild(mail);
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Mobile menu ----------
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
    }
  });
})();