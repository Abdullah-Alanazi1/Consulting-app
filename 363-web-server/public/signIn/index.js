async function handleFormSubmit(event) {
  event.preventDefault();
  // Get the value from the email and password fields
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const response = await fetch("/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (data.error) {
      showElement();
      return;
    }
  } catch (error) {
    console.log(error);
  }

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
