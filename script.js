/* =========================================================
   HANDWARA GYMKHANA
   PREMIUM GYM WEBSITE — JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open");

    if (navLinks.classList.contains("open")) {
      menuButton.textContent = "✕";
      menuButton.setAttribute("aria-label", "Close menu");
    } else {
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-label", "Open menu");
    }

  });


  /* Close menu after clicking a link */

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");

      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-label", "Open menu");

    });

  });

}


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }

  });


  navigationLinks.forEach(link => {

    link.classList.remove("active");

    const target = link.getAttribute("href");

    if (target === `#${currentSection}`) {
      link.classList.add("active");
    }

  });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
  ".facility-card, .price-card, .gallery-item, .contact-card, .about-text, .about-heading"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

function updateBackToTop() {

  if (!backToTop) return;

  if (window.scrollY > 500) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

}

window.addEventListener("scroll", updateBackToTop);

updateBackToTop();


if (backToTop) {

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* ================= WHATSAPP ================= */

/*
  IMPORTANT:
  Replace 91XXXXXXXXXX with the actual
  Handwara Gymkhana WhatsApp number.

  Example format:
  919876543210

  Do NOT put +, spaces or dashes.
*/

const whatsappButton = document.getElementById("whatsappButton");

const gymWhatsAppNumber = "91XXXXXXXXXX";

const whatsappMessage =
  "Hello Handwara Gymkhana! I would like to know more about your membership plans and timings.";


if (whatsappButton) {

  whatsappButton.addEventListener("click", function (event) {

    event.preventDefault();

    if (gymWhatsAppNumber.includes("X")) {

      alert(
        "Please add the real Handwara Gymkhana WhatsApp number in script.js first."
      );

      return;

    }

    const whatsappURL =
      `https://wa.me/${gymWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

  });

}


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


/* ================= SMOOTH INTERNAL LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const targetID = this.getAttribute("href");

    if (!targetID || targetID === "#") {
      return;
    }

    const targetElement = document.querySelector(targetID);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    const navbarHeight = navbar
      ? navbar.offsetHeight
      : 0;

    const targetPosition =
      targetElement.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});


/* ================= BUTTON RIPPLE EFFECT ================= */

const interactiveButtons = document.querySelectorAll(
  ".primary-button, .secondary-button, .plan-button, .whatsapp-button, .call-button"
);

interactiveButtons.forEach(button => {

  button.addEventListener("click", function () {

    this.style.transform = "scale(0.97)";

    setTimeout(() => {

      this.style.transform = "";

    }, 120);

  });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
  "%c HANDWARA GYMKHANA ",
  "background:#d7ff00;color:#000;font-size:18px;font-weight:bold;padding:8px;"
);

console.log(
  "Train. Transform. Become Stronger."
);
