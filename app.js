//select all input fields
let name = document.querySelectorAll("input")[0];
let email = document.querySelectorAll("input")[1];
let phone = document.querySelectorAll("input")[2];
let password = document.querySelectorAll("input")[3];
let cpassword = document.querySelectorAll("input")[4];
let button = document.querySelector("#submit");

//function to  check password
let checkPassword = (pass) => {
  let specialCharcters = "@#$%^&*";
  for (let i = 0; i < specialCharcters.length; i++) {
    for (let j = 0; j < pass.length; j++) {
      if (pass[j] == specialCharcters[i]) {
        return true;
      }
    }
    return false;
  }
};

//add event listner submit
document.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value.length >= 8) {
    document.querySelectorAll("p")[0].innerText = "";
    email.focus();
    if (email.value.includes("@gmail.com")) {
      document.querySelectorAll("p")[1].innerText = "";
      phone.focus();
      if (phone.value.length === 10) {
        document.querySelectorAll("p")[2].innerText = "";
        password.focus();
        if (password.value.length > 5 && checkPassword(password.value)) {
          document.querySelectorAll("p")[3].innerText = "";
          cpassword.focus();
          if (cpassword.value === password.value) {
            document.querySelectorAll("p")[4].innerText = "";
          } else {
            document.querySelectorAll("p")[4].innerText =
              "Password not matching";
          }
        } else {
          document.querySelectorAll("p")[3].innerText =
            "enter correct password";
        }
      } else {
        document.querySelectorAll("p")[2].innerText =
          "mobile number should be 10 digits";
      }
    } else {
      document.querySelectorAll("p")[1].innerText = "enter an valid email";
    }
  } else {
    document.querySelectorAll("p")[0].innerText =
      "name should be greater than 8 characters";
  }
});
