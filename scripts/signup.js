let signUpArr = JSON.parse(localStorage.getItem("userData")) || [];

let FormTag = document.querySelector("#signup-form");
const signUpSection = document.getElementById("signup-container");
const loginSection = document.getElementById("login-container");

const signBtn = document.getElementById("redirect-signup");
const loginBtn = document.getElementById("redirect-login");

FormTag.addEventListener("submit", getData);
signBtn.addEventListener("click", toggleLoginSignup);
loginBtn.addEventListener("click", toggleLoginSignup);

function getData(event) {
  event.preventDefault();

  let userData = {
    UserName: FormTag.elements["name"].value,
    UserEmail: FormTag.elements["email"].value,
    UserPassword: FormTag.elements["password"].value,
  };
  console.log(userData);

  if (!userData.UserName || !userData.UserEmail || !userData.UserPassword) {
    return alert("Please Fill the Details");
  }

  let isUserExist = signUpArr.some(user => user.UserEmail === userData.UserEmail);
//some go through each and return true if its one also true in data(agr ek bhi true rha to)
  if (isUserExist) {
    return alert("User with this email already exists, please sign in");
  }

  signUpArr.push(userData);
  localStorage.setItem("userData", JSON.stringify(signUpArr));
  FormTag.reset();

  alert("Successfully Signed in. We are directing you to Login Page");
  return toggleLoginSignup();
}

function toggleLoginSignup() {
  if (signUpSection.style.display === "none") {
    signUpSection.style.display = "flex";
    loginSection.style.display = "none";
  } else {
    signUpSection.style.display = "none";
    loginSection.style.display = "flex";
  }
}
