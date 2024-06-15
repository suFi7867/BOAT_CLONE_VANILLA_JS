let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function appendProductsToDOM(data) {
  const container = document.querySelector(".cart");
  container.innerHTML = "";

  if (data.length == 0) {
    container.innerHTML = `  <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif"  alt="">`;
  }

  data.forEach((product) => {
    const productContainer = document.createElement("div");
    // productContainer.setAttribute("product-id",product.id)
    productContainer.classList.add("card");

    const productHTML = `
      <img src="${product.image}" alt="">
      <h3>${product.name}</h3>
      <span>${formatter.format(product.price)}</span>
      <select name="Qty" id="Qty" >
          <option value="1" ${product.quantity==1 ? "selected" : ""}>Qty-1</option>
          <option value="2" ${product.quantity==2 ? "selected" : ""}>Qty-2</option>
          <option value="3" ${product.quantity==3 ? "selected" : ""}>Qty-3</option>
      </select>
      <button>Delete</button>`;

    productContainer.innerHTML = productHTML;
    container.appendChild(productContainer);

    const cartBtn = productContainer.querySelector("select");
    cartBtn.addEventListener("change", (e) => {
      // addItemsToCart(product);
      handleQty(product.id, e.target.value);
    });
  });
}

// Call the function to append products to the DOM
appendProductsToDOM(cartData);

// let items = 0;

// let totalMRP = 0;

// let discount = 0;

// let totalAmount = 0;

// function calculateTotalAmount() {
//   cartData.forEach(function (el) {
//     console.log(el);
//     // totalAmount=totalAmount+el.price
//     totalAmount += el.price;
//     totalMRP += el.originalPrice;
//   });
//   discount = Math.round(((totalMRP - totalAmount) / totalMRP) * 100);
// document.querySelector
// }

let initiaCartValues = {
  items: 0,
  totalMRP: 0,
  discount: 0,
  totalAmount: 0,
};

function calculateTotalAmount() {
  const cartValues = cartData.reduce(function (acc, curr) {
    return {
      totalMRP: acc.totalMRP + (curr.originalPrice *curr.quantity) ,
      items: acc.items + Number(curr.quantity),
      totalAmount: acc.totalAmount + (curr.price*curr.quantity),
    };
  }, initiaCartValues);

  cartValues.discount = Math.round(
    ((cartValues.totalMRP - cartValues.totalAmount) / cartValues.totalMRP) * 100
  );
  document.querySelector("#total-items").innerHTML = cartValues.items;
  document.querySelector("#total-price").innerHTML = formatter.format(
    cartValues.totalMRP
  );
  document.querySelector(
    "#discount-price"
  ).innerHTML = `${cartValues.discount} %`;
  document.querySelector("#total-amount").innerHTML = formatter.format(
    cartValues.totalAmount
  );
}
calculateTotalAmount();

function handleQty(id, val) {
  let updatedCartData = cartData.map((el) => {
    if (el.id === id) {
      el.quantity = val;
    }
    return el;
  });
  localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  calculateTotalAmount()
}