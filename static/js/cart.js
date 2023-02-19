"use strict";

// Add to cart function for Lucky Modal
const addToCartLucky = document.querySelectorAll(".add-to-cart-lucky");
const cartNumber = document.querySelector(".cart-number");
const cartParent = document.querySelector(".cart-parent");
console.log(cartNumber);
cartNumber.textContent = 0;
for (let i = 0; i < addToCartLucky.length; i++) {
  addToCartLucky[i].addEventListener("click", function () {
    if (cartNumber.textContent < 2) {
      cartParent.innerHTML = `<div class="cart-content px-3 py-2">
                    <div class="cart-img-cont">
                      <img src="static/img/landingpagepic.jpg" alt="" />
                    </div>
                    <div class="cart-desc">
                      <div class="cart-text-cont">
                        <h3>Brown Mystical Bag</h3>
                      </div>
                      <div class="cart-button-cont">
                        <button id="removeButton">Remove</button>
                        <p class="price">$14,000</p>
                        <div class="number">
                          <span class="operation">+</span> <span>1</span> <span class="operation">-</span>
                        </div>
                      </div>
                    </div>
                  </div>`;
    } else {
      alert(`You can only add two lucky bags to your cart`);
    }
  });
}
