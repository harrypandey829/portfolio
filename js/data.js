/* =====================================================================
   data.js  —  THE ONLY FILE YOU NEED TO EDIT FOR YOUR CONTENT
   Everything on the website AND everything the chatbot knows comes
   from here. Change the text between the quotes "like this".
   Lines marked  EDIT  are placeholders: replace them with your real info.
   Be careful: keep the quotes " " and commas , in place.
   ===================================================================== */

window.PORTFOLIO = {

  // ---------- BASIC INFO ----------
  name: "Hariom Pandey",                      // EDIT
  email: "harrypandey460@gmail.com",            // EDIT
  location: "India",                      // EDIT (city, country)
  availability: "Open to fresher roles. Available to join immediately.", // EDIT
  roles: ["Software Engineering", "AI Engineering", "Data Science", "Data Analytics"],
  resumeUrl: "assets/Hariom_Pandey_Resume.pdf",         // put your PDF in the assets folder with this name

  // ---------- SHORT BIO (used in About + chatbot) ----------
     bio: "I'm Hariom, a fresher in software engineering, AI engineering and data science. " +
       "I'm doing my BS at IIT Madras, interned in data analytics at Infinity Learn, and have solved 500+ problems on LeetCode and GFG. " +
       "I've studied machine learning, deep learning, transformers, LLM fine-tuning, RAG and agentic AI, and put them to work: a Legal-BERT classifier for legal documents, a speech recognition model for Uyghur, low-light mosquito detection and a resume parser. " +
       "I also build full-stack apps, and I design them to stay reliable as more people use them.", // EDIT freely

  // ---------- EDUCATION ----------
    education: [
    {
      title: "BS in Data Science and Applications(Minor in Finance and Economics), IIT Madras",
      period: "2022 – 2026  ",
      detail: "Coursework in programming, statistics, machine learning and data science."
    }
  ],

  // ---------- EXPERIENCE ----------
   experience: [
    {
      title: "Data Analytics Intern",
      org: "Infinity Learn",
      period: "Sep 2025 - April 2026",
      points: [
        "Wrote advanced SQL queries and built Metabase dashboards that turned student data into clear, usable reports.",
        "Worked with a Snowflake data lake, moving data in with Airbyte pipelines and shaping it with dbt transformations.",
        "Analysed data of millions of students in a data science project.",
        "Improved my team coordination and communication, and used AI tools to work faster and more productively."
      ]
    }
  ],

  // ---------- SKILLS (groups are shown as cards) ----------
    skills: [
    { group: "Languages",           items: ["Python", "SQL", "JavaScript", "HTML", "CSS"] },
    { group: "Machine learning",    items: ["scikit-learn", "Neural networks", "PyTorch", "NLP", "Speech recognition", "Computer vision"] },
    { group: "GenAI and LLMs",      items: ["Hugging Face Transformers", "LLM fine-tuning", "LoRA / PEFT", "RAG", "LangChain", "LangGraph", "Agentic AI", "Qdrant", "Groq"] },
    { group: "Data",                items: ["Pandas", "NumPy", "Matplotlib", "Data analysis", "Data visualisation"] },
    { group: "Backend and databases", items: ["FastAPI", "PostgreSQL", "SQL", "NoSQL databases"] },
    { group: "Frontend and tools",  items: ["React", "Full-stack development", "Deployment", "Git and GitHub", "Kaggle", "Jupyter"] }
  ],

  // ---------- PROJECTS ----------
  // "keywords" help the chatbot recognise questions about each project.
  // Leave github / demo / kaggle as "" if you don't have a link yet; the button is then hidden.
  projects: [
    {
      title: "Legal Document Classification",
      category: "NLP",
      summary: "Fine-tuned Legal-BERT with LoRA to classify legal and policy documents in a college Kaggle competition. " +
               "Used head-and-tail truncation for long documents and a weighted loss. Reached 0.69 accuracy.", // EDIT score if it improved
      tags: ["Python", "PyTorch", "Legal-BERT", "LoRA / PEFT", "Hugging Face"],
      keywords: ["legal", "document classification", "bert", "lora", "peft", "policy"],
      github: "", kaggle: "", demo: ""
    },
    {
      title: "Uyghur Speech Recognition",
      category: "Speech",
      summary: "Built an automatic speech recognition model that turns Uyghur audio into text. " +
               "The data had about 24 hours of speech across 9,468 clips at 16 kHz, and the score was character error rate.",
      tags: ["Python", "ASR", "Audio processing", "Kaggle"],
      keywords: ["uyghur", "speech", "asr", "audio", "cer", "voice"],
      github: "", kaggle: "", demo: ""
    },
    {
      title: "Low-light Mosquito Detection",
      category: "Computer vision",
      summary: "Detected and classified mosquitoes across 6 species in low-light images for a college Kaggle competition, scored by mAP.",
      tags: ["Python", "Object detection", "Computer vision", "Kaggle"],
      keywords: ["mosquito", "detection", "vision", "map", "low light", "cv"],
      github: "", kaggle: "", demo: ""
    },
    {
      title: "Resume Parser and Ranker",
      category: "NLP",
      summary: "Built for HR teams buried in resumes. Upload a job description and a folder of resumes, and the app scores each one against the JD and ranks them, so the best fits show up first.",
      tags: ["Python", "NLP"],   // EDIT tags: add the libraries you actually used
      keywords: ["resume parser", "parser", "cv parser", "parsing", "resume", "ranking", "screening", "jd", "job description"],
      github: "", kaggle: "", demo: ""
    },
    {
      title: "YouTube Video Chatbot (RAG)",
      category: "Generative AI",
      summary: "Missed something in a lecture? Paste a YouTube video and ask the chatbot about the part you didn't get, or ask it for a summary of the whole video. Answers come from the video's own content, built with retrieval-augmented generation.",
      tags: ["Python", "RAG", "LLMs"],   // EDIT tags: add what you actually used
      keywords: ["rag", "retrieval", "llm", "vector", "genai", "generative", "youtube", "video", "transcript", "summary", "summarise", "summarize", "chatbot"],
      github: "", kaggle: "", demo: ""
    },
    {
      title: "Sports Club Management",
      category: "Full stack",
      summary: "A full-stack app for running a sports club, with login and role-based access, subscriptions, event attendance and performance tracking. An agentic AI assistant lets users get work done by asking: generate reports, build training plans, or check which events they're attending.",
      tags: ["React", "FastAPI", "Groq", "Agentic AI", "Authentication", "Role-based access"],
      keywords: ["sports", "club", "sportsclub", "react", "fastapi", "groq", "agentic", "agent", "authentication", "authorization", "subscription", "attendance", "event", "performance", "full stack"],
      github: "", kaggle: "", demo: ""
    },
    {
      title: "Household Service Platform",
      category: "Full stack",
      summary: "Book a home service, chat with the professional, track your order and rate the work afterwards. An AI assistant answers the questions people ask most, like \"where is my professional?\" or \"is he coming?\", straight from the live order status.",
      tags: ["React", "FastAPI", "Groq", "Agentic AI", "Real-time chat", "Order tracking"],
      keywords: ["household", "service", "services", "booking", "react", "fastapi", "groq", "agentic", "agent", "chat", "tracking", "order", "rating", "professional", "full stack"],
      github: "", kaggle: "", demo: ""
    }
  ],

  // ---------- PROFILE LINKS ----------
  // "handle" is the text shown on the card. Replace each url with your own.
  links: [
    { id: "github",   label: "GitHub",    handle: "@harrypandey829", url: "https://github.com/harrypandey829",                 note: "Code for my projects" },
    { id: "linkedin", label: "LinkedIn",  handle: "Hariom Pandey",      url: "https://www.linkedin.com/in/hariom-pandey-4700862a2",       note: "Experience and contact" },
    { id: "leetcode", label: "LeetCode",  handle: "@harrypandey460", url: "https://leetcode.com/u/harrypandey460/",            note: "Problem solving" },
    { id: "gfg",      label: "GeeksforGeeks", handle: "@hp72324np", url: "https://www.geeksforgeeks.org/profile/hp72324np", note: "Practice and articles" },
    { id: "kaggle",   label: "Kaggle",    handle: "@vimalpandey6388", url: "https://www.kaggle.com/vimalpandey6388/",             note: "Notebooks and competitions" },
    { id: "instagram",label: "Instagram", handle: "@hari._o", url: "https://www.instagram.com/hari._o/",         note: "Outside of code" }
  ],

  // ---------- RECRUITER FAQ ----------
  faq: [
    { q: "What roles are you looking for?",
      a: "Entry-level roles in software engineering, AI engineering, data science and data analytics." },
    { q: "What kind of projects have you built?",
      a: "NLP (legal document classification, resume parser), speech recognition for Uyghur, computer vision for mosquito detection, a RAG app, and full-stack apps for a sports club and household services." },
    { q: "What is your background?",
      a: "I'm pursuing the BS degree at IIT Madras and interned in data analytics at Infinity Learn." },
        { q: "When can you start?",
      a: "I can join immediately. If I'm working at the time of the offer, I'll serve my notice period first and join right after." },
    { q: "How can I contact you?",
      a: "Email works best. The address is in the contact section, and my LinkedIn is linked below." }
  ]
};
