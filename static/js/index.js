// 'use strict'
// Loding the page
const showPage = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
};
window.addEventListener("load", function () {
  showPage();
});

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

// Styling for Text Changing

// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
let i = 0,
  a = 0,
  isBackspacing = false,
  isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".
let textArray = [
  "Carry your world in style with our versatile, durable bags",
  "Discover the ultimate collection of stylish bags here limited offer this month",
  "Elevate your style with our sleek and sturdy men's bags.",
  "Unleash your fashion sense with our chic and spacious women's bags.",
];
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const typingDelay = 100;
const erasingDelay = 25;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Making the background blur on modal
const modalButton = document.querySelector(".luckybutton");
const modal = document.querySelector(".modal");
modalButton.addEventListener("click", function () {
  modal.style.backdropFilter = "blur(10px)";
});
