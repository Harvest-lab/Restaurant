const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const body = document.body; // Target the body

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");

  // to prevent the background from scrolling while the menu is open
  body.style.overflow = menu.classList.contains("active") ? "hidden" : "auto";
});
