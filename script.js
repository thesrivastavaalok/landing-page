const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose_content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".explore_content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore_content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".explore_content .explore_btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".explore__grid div", {
  duration: 1000,
  delay: 2500,
  interval: 500,
});
