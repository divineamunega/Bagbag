
// Styling for Text Changing

// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
let i = 0,
  a = 0,
  isBackspacing = false,
  isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".
let textArray = [
  "Carry your world in style with our versatile, durable bags.",
  "Discover the ultimate collection of stylish bags here limited offer this month.",
  "Elevate your style with our sleek and sturdy men's bags.",
  "Unleash your fashion sense with our chic and spacious women's bags.",
];
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const typingDelay = 100;
const erasingDelay = 25;
const newTextDelay = 100; // Delay between current and next text
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



function myFunction(x) {
  x.classList.toggle("bi-heart-fill");
}

// Add to cart function for Lucky Modal
// const addToCartLucky = document.querySelectorAll(".add-to-cart-lucky");
// const cartNumber = document.querySelector(".cart-number");
// const cartParent = document.querySelector(".cart-parent");
// console.log(cartNumber);
// cartNumber.textContent = 0;
// for (let i = 0; i < addToCartLucky.length; i++) {
//   addToCartLucky[i].addEventListener("click", function () {
//     if (cartNumber.textContent < 2) {
//       cartParent.innerHTML = `<div class="cart-content px-3 py-2">
//                     <div class="cart-img-cont">
//                       <img src="static/img/landingpagepic.jpg" alt="" />
//                     </div>
//                     <div class="cart-desc">
//                       <div class="cart-text-cont">
//                         <h3>Brown Mystical Bag</h3>
//                       </div>
//                       <div class="cart-button-cont">
//                         <button id="removeButton">Remove</button>
//                         <p class="price">$14,000</p>
//                         <div class="number">
//                           <span class="operation">+</span> <span>1</span> <span class="operation">-</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>`;
//     } else {
//       alert(`You can only add two lucky bags to your cart`);
//     }
//   });
// }