/* =====================================================================
   chatbot.js  —  a simple chatbot that answers recruiter questions.

   How it works (no server, no API key, completely free):
   1. The visitor types a question.
   2. We look for keywords in it (like "skills", "project", "contact").
   3. We reply with text built from your data.js file.

   To teach it something new: add a new block to the "topics" list below.
   ===================================================================== */

(function () {
  const P = window.PORTFOLIO;

  // ---------- Grab the page elements ----------
  const toggle = document.getElementById("chat-toggle");
  const panel  = document.getElementById("chat-panel");
  const close  = document.getElementById("chat-close");
  const log    = document.getElementById("chat-log");
  const form   = document.getElementById("chat-form");
  const input  = document.getElementById("chat-input");
  const chips  = document.getElementById("chat-chips");
  const heroBtn = document.getElementById("hero-chat");

  const firstName = P.name.split(" ")[0];

  // ---------- Helpers ----------
  const list = (items) => "<ul>" + items.map((i) => `<li>${i}</li>`).join("") + "</ul>";
  const link = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
  const findLink = (id) => P.links.find((l) => l.id === id);

  // ---------- What the bot can talk about ----------
  // keywords: words that trigger this topic.   answer(): what the bot says.
  const topics = [
    {
      keywords: ["hi", "hello", "hey", "namaste", "good morning", "good evening"],
      answer: () => `Hi! I'm a chatbot that knows ${firstName}'s portfolio. Ask about skills, projects, experience or how to get in touch.`
    },
    {
      keywords: ["who", "about", "introduce", "yourself", "background", "tell me"],
      answer: () => `${P.bio}<br><br>${P.availability}`
    },
    {
      keywords: ["skill", "tech", "stack", "language", "tools", "know", "python", "sql"],
      answer: () => "Here is what I work with:" + list(P.skills.map((g) => `<strong>${g.group}:</strong> ${g.items.join(", ")}`))
    },
    {
      keywords: ["project", "built", "build", "work", "portfolio", "made"],
      answer: () => "Projects I've built:" + list(P.projects.map((p) => `<strong>${p.title}</strong> (${p.category})`)) +
                    "Ask about any of them by name for details."
    },
    {
      keywords: ["experience", "intern", "internship", "job", "worked", "infinity", "company"],
      answer: () => P.experience.map((j) =>
        `<strong>${j.title}</strong> at ${j.org} (${j.period})` + list(j.points)).join("")
    },
    {
      keywords: ["education", "degree", "college", "study", "iit", "iitm", "madras", "university", "qualification"],
      answer: () => P.education.map((e) => `<strong>${e.title}</strong> (${e.period})<br>${e.detail}`).join("<br><br>")
    },
    {
      keywords: ["role", "hire", "hiring", "position", "looking", "available", "join", "notice", "opening", "opportunity"],
      answer: () => `I'm looking for: ${P.roles.join(", ")}.<br>${P.availability}`
    },
    {
      keywords: ["contact", "email", "mail", "reach", "phone", "connect", "touch"],
      answer: () => `The best way to reach me is email: ${link("mailto:" + P.email, P.email)}.<br>You can also find me on ${link(findLink("linkedin").url, "LinkedIn")}.`
    },
    {
      keywords: ["link", "profile", "social", "online", "everywhere"],
      answer: () => "Find me here:" + list(P.links.map((l) => link(l.url, l.label)))
    },
    { keywords: ["github", "code", "repo", "repository"],
      answer: () => `My code is on ${link(findLink("github").url, "GitHub")}.` },
    { keywords: ["linkedin"],
      answer: () => `Here is my ${link(findLink("linkedin").url, "LinkedIn profile")}.` },
    { keywords: ["leetcode", "dsa", "problem solving", "coding practice", "algorithm"],
      answer: () => `My problem-solving practice is on ${link(findLink("leetcode").url, "LeetCode")} and ${link(findLink("gfg").url, "GeeksforGeeks")}.` },
    { keywords: ["gfg", "geeksforgeeks", "geeks"],
      answer: () => `Here is my ${link(findLink("gfg").url, "GeeksforGeeks profile")}.` },
    { keywords: ["kaggle", "competition", "notebook"],
      answer: () => `My notebooks and competition work are on ${link(findLink("kaggle").url, "Kaggle")}.` },
    { keywords: ["instagram", "insta"],
      answer: () => `Here is my ${link(findLink("instagram").url, "Instagram")}.` },
    { keywords: ["resume", "cv", "curriculum"],
      answer: () => `You can ${link(P.resumeUrl, "open my resume (PDF)")}.` },
    { keywords: ["where", "location", "city", "based", "relocate"],
      answer: () => `I'm based in ${P.location}.` },
    { keywords: ["thanks", "thank", "great", "awesome"],
      answer: () => "Happy to help. Anything else you'd like to know?" }
  ];

  // ---------- Decide which topic matches the question ----------
  function matches(words, text, keyword) {
    if (keyword.includes(" ")) return text.includes(keyword);       // phrases
    if (keyword.length <= 3) return words.includes(keyword);         // short words must match exactly
    return words.some((w) => w.startsWith(keyword));                 // "projects" matches "project"
  }

  function reply(question) {
    const text = question.toLowerCase();
    const words = text.split(/[^a-z0-9+#]+/).filter(Boolean);

    // 1) Is the visitor asking about one specific project?
    let bestProject = null, bestProjectScore = 0;
    P.projects.forEach((p) => {
      const score = p.keywords.filter((k) => matches(words, text, k)).length;
      if (score > bestProjectScore) { bestProject = p; bestProjectScore = score; }
    });
    if (bestProject) {
      const p = bestProject;
      const extra = [
        p.github && link(p.github, "Code"),
        p.kaggle && link(p.kaggle, "Kaggle"),
        p.demo && link(p.demo, "Live demo")
      ].filter(Boolean).join(" · ");
      return `<strong>${p.title}</strong> (${p.category})<br>${p.summary}<br><br>Tech: ${p.tags.join(", ")}` + (extra ? `<br>${extra}` : "");
    }

    // 2) Otherwise find the topic with the most keyword hits
    let best = null, bestScore = 0;
    topics.forEach((t) => {
      const score = t.keywords.filter((k) => matches(words, text, k)).length;
      if (score > bestScore) { best = t; bestScore = score; }
    });
    if (best) return best.answer();

    // 3) Nothing matched
    return `I don't have an answer for that yet. Try asking about skills, projects, experience, education or contact details. You can also email ${firstName} at ${link("mailto:" + P.email, P.email)}.`;
  }

  // ---------- Showing messages ----------
  function addMessage(html, who) {
    const m = document.createElement("div");
    m.className = "msg " + who;
    if (who === "user") m.textContent = html; else m.innerHTML = html;
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
    return m;
  }

  function ask(question) {
    const q = question.trim();
    if (!q) return;
    addMessage(q, "user");
    const typing = addMessage("…", "bot");
    setTimeout(() => {                       // a short pause feels more natural
      typing.innerHTML = reply(q);
      log.scrollTop = log.scrollHeight;
    }, 450);
  }

  // ---------- Suggested question buttons ----------
  ["What are your skills?", "Show your projects", "Tell me about your experience", "How can I contact you?"].forEach((q) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = q;
    b.addEventListener("click", () => ask(q));
    chips.appendChild(b);
  });

  // ---------- Open / close the panel ----------
  let greeted = false;
  function openChat() {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    if (!greeted) {
      addMessage(`Hi! I can answer questions about ${firstName}'s skills, projects and experience. What would you like to know?`, "bot");
      greeted = true;
    }
    input.focus();
  }
  function closeChat() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }

  toggle.addEventListener("click", () => (panel.hidden ? openChat() : closeChat()));
  close.addEventListener("click", closeChat);
  if (heroBtn) heroBtn.addEventListener("click", openChat);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) closeChat(); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    ask(input.value);
    input.value = "";
  });
})();