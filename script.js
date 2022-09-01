const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const seeMore = document.querySelector(".text");
const arrow = document.querySelector(".arrow");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("menu");
});

seeMore.addEventListener("mouseenter", () => {
  arrow.classList.add("arrows");
});

seeMore.addEventListener("mouseleave", () => {
  arrow.classList.remove("arrows");
});
