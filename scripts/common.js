let cards = JSON.parse(localStorage.getItem("cartData")) || [];

let productCount = document.querySelector(".product-count");
productCount.innerHTML = cards.length;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
if (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
  };
}

// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//js for hamburger menu//
const hamburgerMenu = document.querySelector(".hamburger > img:nth-child(1)");
const closeButton = document.querySelector(".hamburger > img:nth-child(2)");
const leftNavBar = document.querySelector(".left-nav");

hamburgerMenu.addEventListener("click", (e) => {
  hamburgerMenu.style.display = "none";
  closeButton.style.display = "block";
  leftNavBar.style.display = "flex";
  leftNavBar.classList.remove("close");
});

closeButton.addEventListener("click", (e) => {
  hamburgerMenu.style.display = "block";
  closeButton.style.display = "none";
  // leftNavBar.style.display = "none";
  leftNavBar.classList.add("close");
});
