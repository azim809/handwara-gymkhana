// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,5,5,0.96)";
  } else {
    navbar.style.background = "rgba(8,8,8,0.88)";
  }

});


// BACK TO TOP
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// CURRENT YEAR
document.getElementById("year").textContent = new Date().getFullYear();


// SMOOTH INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


// SIMPLE CONSOLE MESSAGE
console.log("Handwara Gymkhana website loaded successfully.");
