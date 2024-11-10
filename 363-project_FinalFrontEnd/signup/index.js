function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}
function checkEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  // Change outline color based on validity
  if (isValid || email === "") {
    emailInput.style.borderColor = "rgb(0, 123, 255)";
  } else {
    console.log("Incorrect");
    emailInput.style.borderColor = "red";
  }
  return isValid;
}
function checkPassword() {
  const password = document.getElementById("password").value;
  // Display the list of checkers;
  document.getElementById("requirements").style.display = "block";
  document.getElementById("requirements").style.display = "block";
  const lengthRequirement = document.getElementById("length");
  const uppercaseRequirement = document.getElementById("uppercase");
  const numberRequirement = document.getElementById("number");
  const specialRequirement = document.getElementById("special");
  const lowercaseRequirement = document.getElementById("lowercase");
  // Initiate a flag to be true, if none match condition -> flaf set to false.
  let flag = true;
  // Check length
  if (password.length >= 8) {
    lengthRequirement.classList.add("valid");
    lengthRequirement.classList.remove("invalid");
  } else {
    lengthRequirement.classList.add("invalid");
    lengthRequirement.classList.remove("valid");
    flag = false;
  }

  // Check for uppercase letter
  if (/[A-Z]/.test(password)) {
    uppercaseRequirement.classList.add("valid");
    uppercaseRequirement.classList.remove("invalid");
  } else {
    uppercaseRequirement.classList.add("invalid");
    uppercaseRequirement.classList.remove("valid");
    flag = false;
  }

  // Check for number
  if (/\d/.test(password)) {
    numberRequirement.classList.add("valid");
    numberRequirement.classList.remove("invalid");
  } else {
    numberRequirement.classList.add("invalid");
    numberRequirement.classList.remove("valid");
    flag = false;
  }

  // Check for special character
  if (/[!@#$%^&*]/.test(password)) {
    specialRequirement.classList.add("valid");
    specialRequirement.classList.remove("invalid");
  } else {
    specialRequirement.classList.add("invalid");
    specialRequirement.classList.remove("valid");
    flag = false;
  }

  // Check for lowercase letter
  if (/[a-z]/.test(password)) {
    lowercaseRequirement.classList.add("valid");
    lowercaseRequirement.classList.remove("invalid");
  } else {
    lowercaseRequirement.classList.add("invalid");
    lowercaseRequirement.classList.remove("valid");
    flag = false;
  }
  return flag;
}

function handleSubmitForm(event) {
  /**
   * ! Note:
   *  ! 0 --> Job Seeker.
   *  ! 1 --> Hr Spec.
   */
  event.preventDefault();
  // check if correct password && email
  if (!(checkPassword() && checkEmail())) {
    alert("Enter valid credintial");
    return;
  }
  // Get the value from the email and password fields
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const position = event.target.value;
  console.log(event);
  /**
   * API Call goes here, for the time being the user will be resirected to the login page.
   */
  redirectToPage("../loginPage");
}
function redirectToPage(url) {
  window.location.href = url;
}
