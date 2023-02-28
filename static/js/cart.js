"use strict";

// Adding To cart
const addToCart = document.querySelectorAll(".add-to-cart");
const cartPic = document.querySelectorAll(".bag-pic");
const cartContainer = document.querySelector(".cart-parent");
const cartItem = document.querySelectorAll(".cart-item");
const itemText = document.querySelectorAll(".text-box");
const price = document.querySelectorAll(".price");
const cartNumber = document.querySelector(".cart-number");
const noItem = document.querySelector(".cart-no-item");
const cartCalc = document.querySelector(".cart-calc");
const total = document.querySelector(".total");
cartNumber.textContent = Number(0);

console.log(cartPic)
if (cartContainer.children.length === 0) {
  noItem.style.display = "flex";
}
for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function () {
    noItem.style.display = "none";
    cartContainer.innerHTML += `
      <div class="cart-item">
                      <div class="cart-img-cont">
                        <img src="${cartPic[i].src}" alt="${cartPic[i].alt}" />
                      </div>
                      <div class="cart-text-cont">
                        <p class="cart-text">${itemText[i].textContent}</p>
                        <div class="number">
                          <button class="change-value add">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#738fa7"
                              class="bi bi-plus-square-fill"
                              viewBox="0 0 16 16">
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                            </svg>
                          </button>
                          <span class="number-value">1</span>
                          <button class="change-value subtract">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#738fa7"
                              class="bi bi-dash-square-fill"
                              viewBox="0 0 16 16">
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="cart-price-cont">
                        <p class="cart-price">${price[i].textContent}</p>
                      </div>
                    </div>
    `;
    cartCalc.innerHTML += `<div class="cart-calc-item order-0">
                      <p class = 'overview'>
                      <span class="cart-number-value">1</span> * <span>${itemText[i].textContent}</span> = <span class="total-per-1">${price[i].textContent}</span>
                      </p>
                    </div>`;
    cartNumber.textContent++;
    // total.textContent = `Total = $${}`
    // let  totalc = [];
    // totalc[i] = price;
    // console.log(totalc)

    const add = document.querySelectorAll(".add");
    const subtract = document.querySelectorAll(".subtract");
    const numberValue = document.querySelectorAll(".number-value");
    const cartNumberValue = document.querySelectorAll(".cart-number-value");
    const totalPer1 = document.querySelectorAll(".total-per-1");
    numberValue.textContent = Number(0);
    console.log(add);
    for (let j = 0; j < add.length; j++) {
      add[j].addEventListener("click", function () {
        numberValue[j].textContent++;
        cartNumberValue[j].textContent = numberValue[j].textContent;
        totalPer1[j].textContent = `$${
          cartNumberValue[j].textContent * price[i].textContent.slice(1, -1)
        }`;
        totalPer1[j].textContent = `$${
          cartNumberValue[j].textContent * price[i].textContent.slice(1, -1)
        }`;
      });
      subtract[j].addEventListener("click", function () {
        if (numberValue[j].textContent > 1) {
          numberValue[j].textContent--;
          cartNumberValue[j].textContent = numberValue[j].textContent;
          totalPer1[j].textContent = `$${
            cartNumberValue[j].textContent * price[i].textContent.slice(1, -1)
          }`;
        }
      });
    }
  });
}
