/**
 * nailsmollys.de — Main Frontend Controller
 */

(function () {
  "use strict";

  // Current active language (default: 'de')
  let currentLang = localStorage.getItem("mollys_lang") || "de";
  if (!TRANSLATIONS[currentLang]) {
    currentLang = "de";
  }

  /**
   * Applies the selected language to all UI elements
   */
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem("mollys_lang", lang);

    const dict = TRANSLATIONS[lang];

    // 1. Update language switcher buttons
    document.querySelectorAll(".lang-sw button, .drawer-lang button").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang") || btn.textContent.trim().toLowerCase();
      btn.classList.toggle("on", btnLang === lang);
    });

    // 2. Update all data-i translated texts
    document.querySelectorAll("[data-i]").forEach((el) => {
      const key = el.getAttribute("data-i");
      const val = dict[key];
      if (val !== undefined) {
        el.innerHTML = val.replace(/\n/g, "<br>");
      }
    });

    // 3. Render services table
    const svcTable = document.getElementById("svcTable");
    if (svcTable && dict.services) {
      svcTable.innerHTML = dict.services
        .map(
          ([name, desc, price]) => `
          <div class="svc-row">
            <span class="svc-name">${name}</span>
            <span class="svc-desc">${desc}</span>
            <span class="svc-price">${price}</span>
          </div>`
        )
        .join("");
    }

    // 4. Render Why grid
    const whyGrid = document.getElementById("whyGrid");
    if (whyGrid && dict.why) {
      whyGrid.innerHTML = dict.why
        .map(
          ([title, body], idx) => `
          <div class="why-card">
            <div class="why-n">0${idx + 1}</div>
            <div class="why-title">${title}</div>
            <div class="why-body">${body}</div>
          </div>`
        )
        .join("");
    }

    // 5. Render FAQ items
    const faqList = document.getElementById("faqList");
    if (faqList && dict.faq) {
      faqList.innerHTML = dict.faq
        .map(
          ([question, answer]) => `
          <div class="faq-item">
            <button class="faq-q" aria-expanded="false" onclick="MollysApp.toggleFAQ(this)">
              <span>${question}</span>
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-a">
              <div class="faq-a-in">${answer}</div>
            </div>
          </div>`
        )
        .join("");
    }

    // Set document lang attribute
    document.documentElement.lang = lang;
  }

  /**
   * FAQ Accordion Toggle
   */
  function toggleFAQ(button) {
    const item = button.closest(".faq-item");
    const wasOpen = item.classList.contains("open");

    // Close all open FAQs
    document.querySelectorAll(".faq-item.open").forEach((el) => {
      el.classList.remove("open");
      const btn = el.querySelector(".faq-q");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });

    if (!wasOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  }

  /**
   * Drawer Menu controls
   */
  function openDrawer() {
    const drawer = document.getElementById("drawer");
    if (drawer) drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    const drawer = document.getElementById("drawer");
    if (drawer) drawer.classList.remove("open");
    document.body.style.overflow = "";
  }

  /**
   * Header scroll shadow & background blur
   */
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        header.classList.toggle("solid", window.scrollY > 20);
      },
      { passive: true }
    );
  }

  /**
   * Intersection Observer for smooth reveal animations
   */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Initialize once DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
  });

  // Global namespace for inline onclick handlers
  window.MollysApp = {
    setLanguage: applyLanguage,
    toggleFAQ: toggleFAQ,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer
  };
})();
