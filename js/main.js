AOS.init();
const toggler = document.getElementById("mobile-toggler");
const close = document.getElementById("close");
const mobileNavLinks = document.getElementsByClassName("mobile-link");
const mobileNav = document.getElementById("mobile-nav");
toggler.addEventListener("click", () => {
    mobileNav.style.marginLeft = "0";
    console.log("clicked");
});
close.addEventListener("click", () => {
mobileNav.style.marginLeft = "-100vw";
});
Array.from(mobileNavLinks).forEach((link) => {
    link.addEventListener("click", () => {
    mobileNav.style.marginLeft = "-100vw";
});
});