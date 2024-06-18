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
 if(span){
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
  
  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    hamburgerIcon.addEventListener('click', function () {
      mobileNavLinks.classList.toggle('active'); // Toggle 'active' class for showing/hiding mobile nav links
    });
  });
