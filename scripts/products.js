const products = [
  {
    id: 1,
    image: "/images/g1.webp",
    playback: "60 Hours Playback",
    rating: "5.0",
    reviews: "77",
    name: "Nirvana lon",
    originalPrice: 1999,
    discountedPrice: "₹7,999",
    offer: "75% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 2,
    image: "/images/g2.webp",
    playback: "60 Hours Playback",
    rating: "4.8",
    reviews: "1359",
    name: "Airdopes 131",
    originalPrice: 899,
    discountedPrice: "₹2,999",
    offer: "70% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 3,
    image: "/images/g3.webp",
    playback: "45 Hours Playback",
    rating: "4.9",
    reviews: "191",
    name: "Airdopes 131 Pro",
    originalPrice: 1099,
    discountedPrice: "₹2,999",
    offer: "63% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 4,
    image: "/images/g4.webp",
    playback: "40 Hours Playback",
    rating: "4.9",
    reviews: "172",
    name: "Airdopes 161",
    originalPrice: 1099,
    discountedPrice: "₹2,499",
    offer: "56% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 5,
    image: "/images/g5.webp",
    playback: "42 Hours Playback",
    rating: "5.0",
    reviews: "35",
    name: "Airdopes 170",
    originalPrice: 1599,
    discountedPrice: "₹3,499",
    offer: "54% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 6,
    image: "/images/g6.webp",
    playback: "40 Hours Playback",
    rating: "4.6",
    reviews: "34",
    name: "Airdopes 170 Pro",
    originalPrice: 1099,
    discountedPrice: "₹2,999",
    offer: "63% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 7,
    image: "/images/g1.webp",
    playback: "40 Hours Playback",
    rating: "4.9",
    reviews: "172",
    name: "Airdopes 161",
    originalPrice: 1099,
    discountedPrice: "₹2,499",
    offer: "56% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 8,
    image: "/images/g7.webp",
    playback: "42 Hours Playback",
    rating: "5.0",
    reviews: "35",
    name: "Airdopes 170",
    originalPrice: 1599,
    discountedPrice: "₹3,499",
    offer: "54% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 9,
    image: "/images/g2.webp",
    playback: "40 Hours Playback",
    rating: "4.6",
    reviews: "34",
    name: "Airdopes 170 Pro",
    originalPrice: 1099,
    discountedPrice: "₹2,999",
    offer: "63% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 10,
    image: "/images/g10.webp",
    playback: "40 Hours Playback",
    rating: "4.9",
    reviews: "172",
    name: "Airdopes 161",
    originalPrice: 1099,
    discountedPrice: "₹2,499",
    offer: "56% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 11,
    image: "/images/g11.webp",
    playback: "42 Hours Playback",
    rating: "5.0",
    reviews: "35",
    name: "Airdopes 170",
    originalPrice: 1599,
    discountedPrice: "₹3,499",
    offer: "54% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },
  {
    id: 12,
    image: "/images/g12.webp",
    playback: "40 Hours Playback",
    rating: "4.6",
    reviews: "34",
    name: "Airdopes 170 Pro",
    originalPrice: 1099,
    discountedPrice: "₹2,999",
    offer: "63% off",
    features: ["ENX Technology"],
    category: "Earphones",
  },

  {
    id: 13,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB400_628ae039-11be-4f0b-b723-651e2bb05de7.jpg?v=1700300890",
    playback: "10000mAh Power Bank",
    rating: "4.6",
    reviews: "34",
    name: "EnergyShroom PB300",
    originalPrice: 1399,
    discountedPrice: "₹2,999",
    offer: "63% off",
    features: ["22W Fast Charging"],
    category: "Power Bank",
  },

  {
    id: 14,
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB300.jpg?v=1700300890",
    playback: "20000mAh Power Bank",
    rating: "4.6",
    reviews: "34",
    name: "EnergyShroom PB400",
    originalPrice: 1299,
    discountedPrice: "₹2,999",
    offer: "63% off",
    features: ["64W Fast Charging"],
    category: "Power Bank",
  },
];
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

let filterCategory = document.getElementById("filter-category");
filterCategory.addEventListener("change", filterFunction);

let sortProducts = document.getElementById("sort-products");
sortProducts.addEventListener("change", sortFunction);

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener("change", handleSearch);

const number = 1999;

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// let productsData= [...products]

//making option tag dynamic is pending//
function appendProductsToDOM(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach((product) => {
    const productContainer = document.createElement("div");
    // productContainer.setAttribute("product-id",product.id)
    productContainer.classList.add("product");

    const productHTML = `
        
          <div class="pictures" >
            <img src="${product.image}" alt="${product.name}" />
            <br />
            <div>
              <p>${product.playback}</p>
            </div>
          </div>
          <div class="info">
            <span>
              &#11088;${product.rating} |${product.reviews}
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png?v=1677571152"
                style="width: 11px; height: 11px" alt="verified reviews" />
            </span>
            <br />
            <h3>${product.name}</h3>
            <div>
              <span class="original-price">${formatter.format(
                product.originalPrice
              )}</span>
              <span class="discounted-price">${product.discountedPrice}</span>
              <span class="offer">${product.offer}</span>
            </div>
            <div class="features">
              ${product.features
                .map((feature) => `<span>${feature}</span>`)
                .join("")}
            </div>
            <div>
              <button class="cart-btn">Add to Cart</button>
            </div>
          </div>
     
      `;

    productContainer.innerHTML = productHTML;
    container.appendChild(productContainer);

    const cartBtn = productContainer.querySelector(".cart-btn");
    cartBtn.addEventListener("click", () => {
      addItemsToCart(product);
    });
  });
}

// Call the function to append products to the DOM
appendProductsToDOM(products);

function filterFunction(event) {
  let category = event.target.value;

  if (category === "Default") {
    return appendProductsToDOM(products);
  }

  // let filteredData = products.filter((product)=> product.category===category)
  let filteredData = products.filter(function (product) {
    if (product.category === category) {
      return product;
    }
  });

  appendProductsToDOM(filteredData);
}

// To fix the sorting issue in your sortFunction, you need to use the localeCompare method for comparing string values instead of using the - operator, which is meant for numeric comparisons. Here’s the corrected sortFunction:

function sortFunction(event) {
  let sortedValue = event.target.value;
  let sortedData = [];

  if (sortedValue === "asc") {
    sortedData = products.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  } else if (sortedValue === "desc") {
    sortedData = products.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  } else if (sortedValue === "htl") {
    sortedData = products.sort(function (a, b) {
      return b.originalPrice - a.originalPrice;
    });
  } else if (sortedValue === "lth") {
    sortedData = products.sort(function (a, b) {
      return a.originalPrice - b.originalPrice;
    });
  }
  appendProductsToDOM(sortedData);
}

function handleSearch(event) {
  // console.log("handleSearch")
  let searchedValue = event.target.value.toLowerCase();
  let searchData = products.filter(function (el) {
    if (el.name.toLowerCase().includes(searchedValue)) {
      return el;
    }
  });
  appendProductsToDOM(searchData);
}
function addItemsToCart(product) {
  let flag = true;
  
  cartData.forEach(function (el) {
    if (el.id === product.id) {
      flag = false;
      return alert("product already exist");
    }
  });

  if (flag) {
    let cartObj = {
      ...product,
      quantity: 1,
    };
    cartData.push(cartObj);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    document.querySelector(".product-count").innerHTML = cartData.length;
  }
}
