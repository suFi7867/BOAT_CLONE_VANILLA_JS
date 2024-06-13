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
  data.forEach((product) => {
    const productContainer = document.createElement("div");
    // productContainer.setAttribute("product-id",product.id)
    productContainer.classList.add("card");

    const productHTML = `
      <img src="${product.image}" alt="">
      <h3>${product.name}</h3>
      <span>${formatter.format(product.originalPrice)}</span>
      <select name="Qty" id="Qty">
          <option value="Qty-1">Qty-1</option>
          <option value="Qty-2">Qty-2</option>
          <option value="Qty-3">Qty-3</option>
      </select>
      <button>Delete</button>`;

    productContainer.innerHTML = productHTML;
    container.appendChild(productContainer);

    //   const cartBtn = productContainer.querySelector(".cart-btn");
    //   cartBtn.addEventListener("click", () => {
    //     addItemsToCart(product);
    //   });
  });
}

// Call the function to append products to the DOM
appendProductsToDOM(cartData);

// <div class="card">

// </div>
