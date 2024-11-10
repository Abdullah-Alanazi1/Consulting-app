function handleFormSubmit(event) {
  event.preventDefault();
  // Get the value from the email and password fields
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  /**
   * * Api call goes here,
   * *   If succesfull, redirect the user to the required page,
   *  *  if not, display the following message
   *  *      "The password or username is incorrect"
   *  !!!!! FOR TESTING ONLY !!!! For now, redirect to the dashboard page.
   */
  const isLogin = true;
  if (!isLogin) {
    showElement();
  } else {
    // todo: Redirect the user to the required page.
    redirectToPage("../Dashboard/dist");
  }
  //   ! THIS FOR TESTING PURPOSES ONLY!
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  // ** Clear the input fields
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function showElement() {
  // Select the element by its ID
  const element = document.getElementById("password-incorrect");

  // Set the display property to 'block'
  element.style.display = "block";
}

function redirectToPage(url) {
  window.location.href = url;
}
