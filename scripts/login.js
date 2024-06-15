// Retrieve userData from localStorage, default to an empty array if not found

let unknownUserBox = document.querySelector(".unknown-user");
let userExistBox = document.querySelector(".is-user-exist");

let formTag = document.querySelector("#login-form");
formTag.addEventListener("submit", handleLogin);

let logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", handleLogOut);

var modal = document.getElementById("myModal");
let userName = "";

function handleLogin(event) {
  event.preventDefault();

  // Retrieve email and password values from the form
  let email = formTag.elements["email"].value;
  let pass = formTag.elements["password"].value;
  let infoArr = JSON.parse(localStorage.getItem("userData")) || [];

  console.log(email, pass);
  // Check if email and password are both provided
  if (!email && !pass) {
    return alert("Please fill the details");
  } else if (!email) {
    return alert("Please Enter Email");
  } else if (!pass) {
    return alert("Please enter Password");
  }

  // Find the user in the stored sign-up details
  let currentUser = infoArr.find((user) => {
    if (user.UserEmail === email) {
      userName = user.UserName;
    }
    return user.UserEmail === email;
  });

  // Check if user exists
  if (!currentUser) {
    return alert("User not found");
  }

  // Check if password matches
  if (currentUser.UserPassword === pass) {
    modal.style.display = "none";
    localStorage.setItem("loggedUser", userName);
    unknownUserBox.style.display = "none";
    userExistBox.style.display = "block";
    document.querySelector(".user-name").innerText = userName;
    formTag.reset();
    return alert("Login successfull");
  } else {
    return alert("Password doesn't match");
  }
}

function handleLogOut() {
  localStorage.removeItem("loggedUser");
  unknownUserBox.style.display = "block";
  userExistBox.style.display = "none";
}

function updateModal() {
  let isUserExist = localStorage.getItem("loggedUser");
  if (isUserExist) {
    unknownUserBox.style.display = "none";
    userExistBox.style.display = "block";
    document.querySelector(".user-name").innerText = isUserExist;
  } else {
    unknownUserBox.style.display = "block";
    userExistBox.style.display = "none";
  }
}

window.onload = (event) => {
  updateModal();
};

// ("user-name");
