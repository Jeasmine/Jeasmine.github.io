// ==============================
// Editable Project Data
// Keep this array as the single source of truth for project cards and modal details.
// Update `viewLink` when project paths change.
// ==============================
const projects = [
  {
    id: "sales-forecasting-system",
    title: "Sales Forecasting with Machine Learning and Deep Learning",
    primaryCategory: "machine-learning",
    categoryLabel: "Machine Learning",
    categories: ["machine-learning", "data-analysis", "deep-learning"],
    summary:
      "Retail demand forecasting system using real brewery sales data (Argentina, 2022-2025) with ML and DL model comparisons.",
    problem:
      "Retail forecasting is affected by seasonality, behavioral variability, and external factors, making robust demand prediction challenging.",
    approach:
      "Conducted deep exploratory analysis and tested CatBoost, XGBoost, and LSTM models; tree models were trained globally while LSTM was trained per category.",
    result:
      "Delivered practical forecasting baselines and decision-support insights for demand planning, inventory optimization, and promotion strategy.",
    metrics: [
      "CatBoost baseline performed strongly without heavy tuning",
      "XGBoost tuning improved quality but remained below CatBoost",
      "LSTM improved category-level forecasting with careful lag/window tuning"
    ],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "CatBoost",
      "TensorFlow/Keras",
      "Time Series Analysis"
    ],
    viewLink: "https://github.com/Jeasmine/Jeasmine.github.io/tree/main/sales_forecasting",
    details: {
      objective:
        "Understand demand behavior, identify patterns, and deliver reliable demand forecasts under real-world sales variability.",
      methodology:
        "EDA for category behavior and co-purchases, seasonal analysis, and model benchmarking across boosting and recurrent approaches.",
      results:
        "Generated useful predictive performance and business-facing insights despite high day-to-day volatility in sales signals.",
      notes:
        "Forecast value came from both model outputs and analytical findings such as seasonality, clusters, and co-purchase behavior."
    }
  },
  {
    id: "skin-cancer-detection",
    title: "Skin Cancer Detection Using Deep Learning",
    primaryCategory: "deep-learning",
    categoryLabel: "Deep Learning",
    categories: ["deep-learning", "machine-learning", "data-analysis"],
    summary:
      "Medical imaging classifier optimized for high-sensitivity detection of malignant skin lesions.",
    problem:
      "Early detection of malignant lesions is critical, but manual image diagnosis is time-consuming and depends on specialist availability.",
    approach:
      "Evaluated Transfer Learning Models and CNN architectures on dermoscopic images; CNN-based models delivered the strongest diagnostic behavior.",
    result:
      "Model performance was intentionally optimized for high sensitivity to reduce high-risk false negatives in a prevention-focused medical context.",
    metrics: [
      "~98% malignant cases correctly detected",
      "~2% malignant cases misclassified",
      "~37% benign cases misclassified"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Image Preprocessing"],
    viewLink: "https://github.com/Jeasmine/Jeasmine.github.io/tree/main/skin_cancer",
    details: {
      objective:
        "Build a reliable binary lesion classifier that prioritizes the detection of malignant cases for safer clinical screening support.",
      methodology:
        "Image preprocessing, architecture comparison (TLM vs CNN), and sensitivity-oriented model evaluation.",
      results:
        "The selected CNN model achieved strong malignant-case detection and supported a prevention-first decision strategy.",
      notes:
        "In medical AI, false negatives carry the highest risk; this project prioritizes sensitivity over strict specificity balance."
    }
  },
  {
    id: "customer-service-intent-classifier",
    title: "Transformer-Based Customer Service Conversation Classifier",
    primaryCategory: "nlp",
    categoryLabel: "NLP",
    categories: ["nlp", "machine-learning", "data-analysis"],
    summary:
      "Multitask NLP system that converts unstructured banking conversations into structured operational signals.",
    problem:
      "Manual complaint classification drives high cost, inconsistent labeling, poor scalability, and slower routing to specialized teams.",
    approach:
      "Implemented a multitask Transformer architecture using `bert-base-spanish-wwm-cased` to jointly perform intent classification and NER.",
    result:
      "System enables automated routing, analytics, and operational traceability by transforming conversations into actionable structured outputs.",
    metrics: [
      "Intent Accuracy: 98% | Weighted F1: 0.99 | Macro F1: 0.97",
      "NER Accuracy: 99% | Weighted F1: 0.99",
      "Scalable classification and extraction workflow"
    ],
    technologies: ["Python", "Transformers", "BERT", "HuggingFace", "NLP Pipelines"],
    viewLink: "https://github.com/Jeasmine/Jeasmine.github.io/tree/main/cx_classifier",
    details: {
      objective:
        "Automate conversation understanding and information extraction to reduce manual effort and improve service orchestration.",
      methodology:
        "Multitask Transformer training, intent categorization, and named-entity extraction over Spanish-language customer conversations.",
      results:
        "High intent-classification quality with strong extraction support for downstream routing and traceability processes.",
      notes:
        "This architecture is a strong baseline for enterprise conversational AI in regulated service environments."
    }
  },
  {
    id: "pca-analysis",
    title: "Principal Component Analysis (PCA) for Dimensionality Reduction",
    primaryCategory: "dimensionality-reduction",
    categoryLabel: "Dimensionality Reduction",
    categories: ["dimensionality-reduction", "machine-learning", "data-analysis"],
    summary: "Dimensionality-reduction workflow designed to simplify correlated feature spaces before downstream modeling.",
    problem:
      "High-dimensional datasets with correlated variables increase computational cost and can reduce model quality due to redundancy and noise.",
    approach:
      "Applied PCA with feature-correlation review, explained-variance analysis, and component-space visualization to retain the most informative structure.",
    result:
      "Captured the majority of dataset variance with fewer components, enabling more efficient modeling and clearer feature-space interpretability.",
    metrics: [
      "Majority variance preserved with reduced components",
      "Lower feature-space complexity for downstream models",
      "Improved interpretability of dominant data structure"
    ],
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    viewLink: "https://github.com/Jeasmine/Jeasmine.github.io/tree/main/PCA",
    details: {
      objective:
        "Reduce dimensionality while preserving meaningful variance so the transformed dataset is faster to model and easier to interpret.",
      methodology:
        "PCA decomposition, component significance analysis, explained-variance tracking, and visualization of component behavior.",
      results:
        "The transformed space retained the core information content with a smaller set of components suitable for downstream ML tasks.",
      notes:
        "This project demonstrates a robust preprocessing strategy for high-dimensional machine learning pipelines."
    }
  }
];

// ==============================
// DOM References
// ==============================
const html = document.documentElement;
const navToggle = document.getElementById("nav-toggle");
const navPanel = document.getElementById("nav-links");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const themeToggle = document.getElementById("theme-toggle");
const typedText = document.getElementById("typed-text");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const projectGrid = document.getElementById("project-grid");
const filterFeedback = document.getElementById("filter-feedback");
const backToTop = document.getElementById("back-to-top");
const yearElement = document.getElementById("year");

// Modal references
const modal = document.getElementById("project-modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalObjective = document.getElementById("modal-objective");
const modalDataset = document.getElementById("modal-dataset");
const modalMethodology = document.getElementById("modal-methodology");
const modalResults = document.getElementById("modal-results");
const modalLessons = document.getElementById("modal-lessons");
const modalTools = document.getElementById("modal-tools");
const modalActions = document.getElementById("modal-actions");

let currentFilter = "all";
let lastFocusedElement = null;

// ==============================
// Helpers
// ==============================
function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function buildActionLink(label, href, className = "text-link-btn") {
  const link = createElement("a", className, label);
  link.href = href;
  return link;
}

function createProjectCard(project, index) {
  const card = createElement("article", "project-card");
  card.style.setProperty("--delay", String(index));

  const category = createElement("p", "project-category", project.categoryLabel);
  const title = createElement("h4", "", project.title);

  const summary = createElement("p", "project-summary", project.summary);

  const problem = createElement("p", "project-scope");
  problem.innerHTML = `<span class="project-label">Problem:</span> ${project.problem}`;

  const approach = createElement("p", "project-scope");
  approach.innerHTML = `<span class="project-label">Approach:</span> ${project.approach}`;

  const metricsTitle = createElement("p", "project-label", "Key Metrics");
  const metricsWrap = createElement("div", "metrics-wrap");
  project.metrics.forEach((metric) => {
    metricsWrap.appendChild(createElement("span", "metric-pill", metric));
  });

  const techWrap = createElement("div", "badge-wrap");
  project.technologies.forEach((tool) => {
    techWrap.appendChild(createElement("span", "skill-badge", tool));
  });

  const result = createElement("p", "project-outcome");
  result.innerHTML = `<span class="project-label">Result:</span> ${project.result}`;

  const actions = createElement("div", "project-actions");
  actions.appendChild(buildActionLink("View Project", project.viewLink, "btn btn-primary btn-small"));

  const detailsButton = createElement("button", "text-link-btn", "See Details");
  detailsButton.type = "button";
  detailsButton.dataset.openModal = project.id;
  actions.appendChild(detailsButton);

  card.append(category, title, summary, problem, approach, metricsTitle, metricsWrap, techWrap, result, actions);
  return card;
}

function getFilteredProjects(filter) {
  if (filter === "all") return projects;
  return projects.filter((project) => project.categories.includes(filter));
}

function renderProjects(filter) {
  const filteredProjects = getFilteredProjects(filter);
  projectGrid.textContent = "";

  if (!filteredProjects.length) {
    const empty = createElement("article", "project-card");
    const title = createElement("h4", "", "No projects in this filter yet");
    const text = createElement(
      "p",
      "project-summary",
      "Update the projects array in script.js to add entries for this category."
    );
    empty.append(title, text);
    projectGrid.appendChild(empty);
  } else {
    filteredProjects.forEach((project, index) => {
      projectGrid.appendChild(createProjectCard(project, index));
    });
  }

  const activeFilterLabel =
    filter === "all"
      ? "All"
      : filterButtons.find((button) => button.dataset.filter === filter)?.textContent || filter;

  filterFeedback.textContent = `${filteredProjects.length} project(s) shown for ${activeFilterLabel}.`;
}

function setActiveFilter(filter) {
  currentFilter = filter;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderProjects(filter);
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  modalCategory.textContent = project.categoryLabel;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;
  modalObjective.textContent = project.problem;
  modalDataset.textContent = "";
  modalDataset.appendChild(buildActionLink(project.viewLink, project.viewLink, "text-link-btn"));
  modalMethodology.textContent = project.approach;
  modalResults.textContent = `${project.result} Key metrics: ${project.metrics.join(" | ")}`;
  modalLessons.textContent = project.details.notes;

  modalTools.textContent = "";
  project.technologies.forEach((tool) => {
    modalTools.appendChild(createElement("span", "skill-badge", tool));
  });

  modalActions.textContent = "";
  modalActions.appendChild(buildActionLink("View Project", project.viewLink, "btn btn-primary btn-small"));

  lastFocusedElement = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalCloseBtn.focus();
}

function closeProjectModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

// ==============================
// Theme Toggle with Persistence
// ==============================
const THEME_KEY = "portfolio-theme";

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
}

function initTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const nextTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});

// ==============================
// Mobile Navigation
// ==============================
navToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navPanel.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 780) {
    navPanel.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ==============================
// Active Nav Link on Scroll
// ==============================
const trackedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const sectionId = entry.target.id;

      navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        link.classList.toggle("is-active", href === `#${sectionId}`);
      });
    });
  },
  {
    root: null,
    rootMargin: "-40% 0px -45% 0px",
    threshold: 0
  }
);

trackedSections.forEach((section) => sectionObserver.observe(section));

// ==============================
// Reveal on Scroll
// ==============================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ==============================
// Project Filtering & Modal Events
// ==============================
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    if (!filter || filter === currentFilter) return;
    setActiveFilter(filter);
  });
});

projectGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-modal]");
  if (!trigger) return;
  openProjectModal(trigger.dataset.openModal);
});

modal.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  if (target.id === "modal-close" || target.dataset.closeModal === "true") {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeProjectModal();
  }
});

modalCloseBtn.addEventListener("click", closeProjectModal);

// ==============================
// Hero Typewriter
// ==============================
const typedPhrases = [
  "AI Architect at Qubika.",
  "Software Engineer with 10+ years of delivery experience.",
  "Finishing the Data Science and Machine Learning specialization at UTEC + MIT."
];

function startTypewriter(phrases) {
  if (!typedText || !phrases.length) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const phrase = phrases[phraseIndex];
    typedText.textContent = phrase.slice(0, charIndex);

    let delay = isDeleting ? 40 : 65;

    if (!isDeleting) {
      charIndex += 1;
      if (charIndex > phrase.length) {
        isDeleting = true;
        delay = 1400;
      }
    } else {
      charIndex -= 1;
      if (charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        charIndex = 0;
        delay = 280;
      }
    }

    window.setTimeout(tick, delay);
  }

  tick();
}

// ==============================
// Back to Top
// ==============================
function handleBackToTopVisibility() {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
}

window.addEventListener("scroll", handleBackToTopVisibility, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==============================
// Init
// ==============================
function init() {
  initTheme();
  setActiveFilter("all");
  startTypewriter(typedPhrases);
  handleBackToTopVisibility();
  yearElement.textContent = String(new Date().getFullYear());
}

init();
