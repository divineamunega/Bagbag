'use strict'
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

// Making the background blur on modal
const modalButton = document.querySelector(".luckybutton");
const modal = document.querySelector(".cartnumber");
modalButton.addEventListener('click', function () {
  modal.style.backdropFilter = "blur(10px)";
});

// Add to cart function for Lucky Modal
const addToCart = document.querySelectorAll(".add-to-cart-lucky");
const cartNumber = document.querySelectorAll('.cart-number');
console.log(cartNumber);
cartNumber.textContent = 0;
for (i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function () {
    if(cartNumber.textContent<2){
      cartNumber.textContent++;
      alert(` You just added 1 item to cart successfully \n Total number of items in cart:${cartNumber}`)
    }
  });
}


