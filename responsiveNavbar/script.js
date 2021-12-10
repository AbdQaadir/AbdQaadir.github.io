const toggler = document.querySelector("#toggler");
const close = document.querySelector(".close");
const mobileNav = document.querySelector("#mobile-nav");

const toggleNav = () => mobileNav.classList.toggle("active");

toggler.addEventListener("click", toggleNav);
close.addEventListener("click", toggleNav);


