const   emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function checkEmail() {
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}

const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input");
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}

function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}


document.getElementById("loginForm")?.addEventListener('submit', addCred);
const userCred = JSON.parse(localStorage.getItem('userCred')) || [];

function addCred(e){
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPass();

  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  let email = document.getElementById('mail').value;
  let pass = document.getElementById('cpass').value;
  
  if(email.match(emailPattern) && pass == passInput.value){
    console.log(userCred) 
    const userDetails = {
    email, pass,
    id: userCred.length > 0 ? userCred[userCred.length - 1].id + 1 : 1
  } 
  userCred.push(userDetails);
     localStorage.setItem('userCred', JSON.stringify(userCred));
  }
}