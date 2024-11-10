const signUpURL = "../otp/";
function handleReset(event) {
  event.preventDefault();
  // Get the value from the email and password fields
  const email = document.getElementById("email").value;
  /**
   * * Api call goes here,
   *  *     Send OTP code to the email, if email exists && Redirect to OTP page
   * *      Otherwise, display:
   *  *           "Incorrect email"
   */
  const isExist = true;
  if (checkEmail && isExist) {
    // todo: Send OTP code && Redirect to OTP page
    redirectToPage();
  } else {
    showElement();
  }
  //   ! THIS FOR TESTING PURPOSES ONLY!
  console.log(`Email: ${email}`);
  // ** Clear the input fields
  document.getElementById("email").value = "";
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
function showElement() {
  // Select the element by its ID
  const element = document.getElementById("email-incorrect");
  // Set the display property to 'block'
  element.style.display = "block";
}

function redirectToPage() {
  window.location.href = signUpURL;
}
