let cards = JSON.parse(localStorage.getItem("cartData")) || [];

let productCount = document.querySelector(".product-count");
productCount.innerHTML = cards.length;


