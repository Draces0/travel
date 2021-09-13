const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const nav = document.querySelector("nav");
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
  nav.classList.toggle("nav-bg");
});
