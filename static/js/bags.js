const bagButton = document.querySelectorAll(".bag-button");
const bagCont = document.querySelectorAll(".bag-cont");
bagCont[0].style.display = 'flex';
for (let i = 0; i < bagCont.length; i++) {}
const openCity = function (evt, bagNum) {
  for (let i = 0; i < bagButton.length; i++) {
    bagCont[i].style.display = "none";
    bagButton[i].className = bagButton[i].className.replace(' active','');
    document.querySelector(`#${bagNum}`).style.display = "flex";
  }
  evt.currentTarget.className += " active";
};


//  Toggling the like button

function myFunction(x) {
  x.classList.toggle("bi-heart-fill");
}