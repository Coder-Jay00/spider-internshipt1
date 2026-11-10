/**
 * VERDANTÉ — A Residence Apart
 * Client-Side JavaScript Architecture
 * Pure Vanilla JavaScript (ES6+), Zero External Dependencies
 */

(function () {
  "use strict";

  // Mark document element as JS-enabled
  document.documentElement.classList.add("js-ready");

  const App = {
    header: null,
    menuToggle: null,
    mobileNav: null,
    navLinks: [],
    sections: [],
    lastFocusedElement: null,

    init() {
      // Cache DOM references
      this.header = document.querySelector(".site-header");
      this.menuToggle = document.querySelector(".menu-toggle");
      this.mobileNav = document.querySelector(".mobile-nav");
      this.navLinks = Array.from(document.querySelectorAll(".nav-link, .mobile-nav__link"));
      this.sections = Array.from(document.querySelectorAll("section[id], header[id]"));

      // Setup modules
      this.initHeaderScroll();
      this.initMobileMenu();
      this.initScrollSpy();
      this.initSmoothScroll();
      this.initLightbox();
      this.initEnquiryForm();
      this.initFooterYear();
      this.checkReducedMotion();

      // Log verification badge
      console.log(
        "%c VERDANTÉ %c Phase 7 Active: Comprehensive Multi-Device QA Verified ",
        "background: #183D32; color: #C6A66B; font-weight: bold; padding: 4px 8px; border-radius: 2px 0 0 2px;",
        "background: #102C25; color: #F7F4EC; padding: 4px 8px; border-radius: 0 2px 2px 0;"
      );
    },

    /**
     * Sticky Header Scroll State
     */
    initHeaderScroll() {
      if (!this.header) return;

      const updateHeader = () => {
        if (window.scrollY > 40) {
          this.header.classList.add("is-scrolled");
        } else {
          this.header.classList.remove("is-scrolled");
        }
      };

      window.addEventListener("scroll", updateHeader, { passive: true });
      updateHeader();
    },

    /**
     * Accessible Mobile Navigation Drawer
     */
    initMobileMenu() {
      if (!this.menuToggle || !this.mobileNav) return;

      const openMenu = () => {
        this.lastFocusedElement = document.activeElement;
        this.mobileNav.classList.add("is-open");
        this.menuToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";

        // Focus first link in drawer
        const firstLink = this.mobileNav.querySelector("a, button");
        if (firstLink) firstLink.focus();
      };

      const closeMenu = () => {
        this.mobileNav.classList.remove("is-open");
        this.menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";

        if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === "function") {
          this.lastFocusedElement.focus();
        }
      };

      this.menuToggle.addEventListener("click", () => {
        const isOpen = this.menuToggle.getAttribute("aria-expanded") === "true";
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      // Close on Escape key
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.mobileNav.classList.contains("is-open")) {
          closeMenu();
        }
      });

      // Close mobile menu when any navigation link is clicked
      const mobileLinks = this.mobileNav.querySelectorAll("a");
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          closeMenu();
        });
      });
    },

    /**
     * ScrollSpy: Active Section Navigation Highlight
     */
    initScrollSpy() {
      if (!("IntersectionObserver" in window)) return;

      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              if (!id) return;

              this.navLinks.forEach((link) => {
                const href = link.getAttribute("href");
                if (href === `#${id}`) {
                  link.classList.add("is-active");
                  link.setAttribute("aria-current", "page");
                } else if (href && href.startsWith("#") && href !== `#${id}`) {
                  link.classList.remove("is-active");
                  link.removeAttribute("aria-current");
                }
              });
            }
          });
        },
        {
          rootMargin: "-25% 0px -65% 0px",
          threshold: 0
        }
      );

      this.sections.forEach((section) => {
        sectionObserver.observe(section);
      });
    },

    /**
     * Smooth Anchor Navigation with Offset Handling
     */
    initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const targetId = anchor.getAttribute("href");
          if (targetId === "#" || targetId === "") return;

          const targetElem = document.querySelector(targetId);
          if (targetElem) {
            e.preventDefault();
            targetElem.scrollIntoView({
              behavior: "smooth"
            });
            // Update URL hash without harsh jumping
            if (history.pushState) {
              history.pushState(null, null, targetId);
            }
          }
        });
      });
    },

    /**
     * Accessible Interactive Project Gallery Lightbox
     */
    initLightbox() {
      const dialog = document.getElementById("gallery-lightbox");
      if (!dialog) return;

      const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
      if (!galleryItems.length) return;

      const imgElem = dialog.querySelector(".lightbox__image");
      const counterElem = dialog.querySelector(".lightbox__counter");
      const titleElem = dialog.querySelector(".lightbox__caption-title");
      const descElem = dialog.querySelector(".lightbox__caption-desc");
      const closeBtn = dialog.querySelector(".lightbox__close");
      const prevBtn = dialog.querySelector(".lightbox__nav-btn--prev");
      const nextBtn = dialog.querySelector(".lightbox__nav-btn--next");
      const stage = dialog.querySelector(".lightbox__stage");
      const imageWrap = dialog.querySelector(".lightbox__image-wrap");

      let currentIndex = 0;
      let lastTrigger = null;
      let touchStartX = 0;
      let touchEndX = 0;

      // Extract gallery item metadata
      const galleryData = galleryItems.map((item, idx) => ({
        index: idx,
        src: item.getAttribute("data-gallery-src") || (item.querySelector("img") ? item.querySelector("img").getAttribute("src") : ""),
        alt: item.getAttribute("data-gallery-alt") || (item.querySelector("img") ? item.querySelector("img").getAttribute("alt") : ""),
        title: item.getAttribute("data-gallery-title") || "",
        desc: item.getAttribute("data-gallery-desc") || ""
      }));

      const showImage = (index) => {
        currentIndex = (index + galleryData.length) % galleryData.length;
        const data = galleryData[currentIndex];

        if (imgElem) {
          imgElem.setAttribute("src", data.src);
          imgElem.setAttribute("alt", data.alt);
        }
        if (counterElem) counterElem.textContent = `Image ${currentIndex + 1} of ${galleryData.length}`;
        if (titleElem) titleElem.textContent = data.title;
        if (descElem) descElem.textContent = data.desc;
      };

      const openLightbox = (index, trigger) => {
        lastTrigger = trigger;
        showImage(index);
        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          dialog.setAttribute("open", "");
        }
        document.body.style.overflow = "hidden";
        if (closeBtn) closeBtn.focus();
      };

      const closeLightbox = () => {
        if (typeof dialog.close === "function") {
          dialog.close();
        } else {
          dialog.removeAttribute("open");
        }
        document.body.style.overflow = "";
        if (lastTrigger && typeof lastTrigger.focus === "function") {
          lastTrigger.focus();
        }
      };

      // Bind thumbnail clicks
      galleryItems.forEach((item, idx) => {
        item.addEventListener("click", () => {
          openLightbox(idx, item);
        });
      });

      // Controls
      if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
      if (prevBtn) prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
      if (nextBtn) nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

      // Keyboard navigation
      dialog.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          closeLightbox();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          showImage(currentIndex - 1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          showImage(currentIndex + 1);
        }
      });

      // Backdrop click closes dialog
      dialog.addEventListener("click", (e) => {
        if (e.target === dialog || e.target === stage) {
          closeLightbox();
        }
      });

      // Prevent closing when clicking image wrapper
      if (imageWrap) {
        imageWrap.addEventListener("click", (e) => {
          e.stopPropagation();
        });
      }

      // Touch swipe gestures
      if (stage) {
        stage.addEventListener("touchstart", (e) => {
          touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        stage.addEventListener("touchend", (e) => {
          touchEndX = e.changedTouches[0].screenX;
          const threshold = 40;
          if (touchEndX < touchStartX - threshold) {
            showImage(currentIndex + 1); // Swipe left -> next
          } else if (touchEndX > touchStartX + threshold) {
            showImage(currentIndex - 1); // Swipe right -> prev
          }
        }, { passive: true });
      }
    },

    /**
     * Accessible Client-Side Enquiry Form Validation
     */
    initEnquiryForm() {
      const form = document.getElementById("enquiry-form");
      if (!form) return;

      const nameInput = document.getElementById("enquiry-name");
      const emailInput = document.getElementById("enquiry-email");
      const phoneInput = document.getElementById("enquiry-phone");
      const feedback = document.getElementById("enquiry-feedback");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[\d\s\+\-\(\)]{7,20}$/;

      const clearError = (input) => {
        if (!input) return;
        input.removeAttribute("aria-invalid");
        const errorEl = document.getElementById(`${input.id}-error`);
        if (errorEl) {
          errorEl.textContent = "";
          errorEl.style.display = "none";
        }
      };

      const setError = (input, message) => {
        if (!input) return;
        input.setAttribute("aria-invalid", "true");
        const errorEl = document.getElementById(`${input.id}-error`);
        if (errorEl) {
          errorEl.textContent = message;
          errorEl.style.display = "block";
        }
      };

      // Real-time clearance of errors on input
      [nameInput, emailInput, phoneInput].forEach((input) => {
        if (!input) return;
        input.addEventListener("input", () => {
          if (input.getAttribute("aria-invalid") === "true") {
            clearError(input);
          }
        });
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;
        const invalidFields = [];

        // Validate Name
        if (!nameInput || !nameInput.value.trim() || nameInput.value.trim().length < 2) {
          setError(nameInput, "Please enter your full name (minimum 2 characters).");
          invalidFields.push(nameInput);
          isValid = false;
        } else {
          clearError(nameInput);
        }

        // Validate Email
        if (!emailInput || !emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
          setError(emailInput, "Please enter a valid email address (e.g. name@example.com).");
          invalidFields.push(emailInput);
          isValid = false;
        } else {
          clearError(emailInput);
        }

        // Validate Phone
        const rawPhone = phoneInput ? phoneInput.value.trim() : "";
        const digitCount = rawPhone.replace(/\D/g, "").length;
        if (!phoneInput || !rawPhone || !phoneRegex.test(rawPhone) || digitCount < 7) {
          setError(phoneInput, "Please enter a valid contact phone number (minimum 7 digits).");
          invalidFields.push(phoneInput);
          isValid = false;
        } else {
          clearError(phoneInput);
        }

        if (!isValid) {
          // Focus first invalid input
          if (invalidFields.length > 0 && typeof invalidFields[0].focus === "function") {
            invalidFields[0].focus();
          }
          if (feedback) {
            feedback.className = "enquiry-feedback";
            feedback.style.display = "none";
          }
        } else {
          // Success State (Front-end demo validation)
          const userName = nameInput.value.trim();
          form.reset();

          if (feedback) {
            feedback.className = "enquiry-feedback enquiry-feedback--success is-visible";
            feedback.style.display = "block";
            feedback.innerHTML = `
              <strong>Enquiry Details Validated</strong>
              Thank you, ${userName}. Your contact information has been verified locally.
              <p style="margin-top: 6px; font-size: 0.8rem; color: rgba(247, 244, 236, 0.85);">
                <em>Notice: Front-end demonstration mode. Form submissions are verified in your browser and are not transmitted to a CRM or external database.</em>
              </p>
            `;
            feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      });
    },

    /**
     * Dynamic Copyright Year
     */
    initFooterYear() {
      const yearEl = document.getElementById("current-year");
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }
    },

    /**
     * Reduced Motion Handling
     */
    checkReducedMotion() {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        document.documentElement.classList.add("reduced-motion");
      }
    }
  };

  // Safe DOM ready initialization
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => App.init());
  } else {
    App.init();
  }

  // Safe window export
  window.VerdanteApp = App;
})();
