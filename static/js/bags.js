//  Code for dynamic sidebar scrolling
const sidebar = document.querySelector(".side-bar");
const footer = document.querySelector("#footer");
const copyright = document.querySelector("#copy-right");

let lastScrollY = window.pageYOffset;
const scrollFunc = function (e) {
  const navHeight = document.querySelector("nav").offsetHeight;
  const sidebarHeight = sidebar.offsetHeight;
  const sidebarBottom = sidebarHeight + sidebar.offsetTop;
  const footerTop = document.querySelector("#footer").offsetTop;
  //   console.log(sidebar.style.width);
  const  currentScrollY = window.pageYOffset;
  if (currentScrollY > lastScrollY) {
    scrollY = window.scrollY;
    if (sidebarBottom >= footerTop) {
      sidebar.style.position = "sticky";
      sidebar.style.left = '0px'
      sidebar.style.bottom = `${
        footer.offsetHeight + copyright.offsetHeight 
      }px`;
    }
  }
  else {
    sidebar.style.position = "sticky";
    sidebar.style.top = "0px";
  }
  lastScrollY = currentScrollY
};
window.addEventListener("scroll", scrollFunc);
