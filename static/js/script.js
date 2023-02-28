// Changing the shadow of the navbar
const navbar = document.querySelector("nav");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    navbar.style.boxShadow = "1px 2px 30px 0px var(--secondaryColor)";
  } else {
    navbar.style.boxShadow = "none";
  }
}
