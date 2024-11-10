document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-button");
  const sections = document.querySelectorAll(".content-section");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hide all sections
      sections.forEach((section) => (section.style.display = "none"));

      // Show the selected section
      const targetSection = button.getAttribute("data-section");
      document.getElementById(targetSection).style.display = "flex";

      // Remove active class from all buttons and add to the clicked one
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const messageButton = document.getElementById("messageButton");
  const messageDropdown = document.getElementById("messageDropdown");

  const notificationButton = document.getElementById("notificationButton");
  const notificationDropdown = document.getElementById("notificationDropdown");

  // Toggle message dropdown
  messageButton.addEventListener("click", function (event) {
    event.stopPropagation();
    messageDropdown.style.display =
      messageDropdown.style.display === "none" ? "block" : "none";
    notificationDropdown.style.display = "none"; // Close notification dropdown if open
  });

  // Toggle notification dropdown
  notificationButton.addEventListener("click", function (event) {
    event.stopPropagation();
    notificationDropdown.style.display =
      notificationDropdown.style.display === "none" ? "block" : "none";
    messageDropdown.style.display = "none"; // Close message dropdown if open
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    messageDropdown.style.display = "none";
    notificationDropdown.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.querySelector(".logout-button");
  const logoutConfirmation = document.getElementById("logoutConfirmation");

  // Show the logout confirmation when the logout button is clicked
  logoutButton.addEventListener("click", function () {
    logoutConfirmation.style.display = "flex";

    // Optionally, redirect to login page after a delay
    setTimeout(function () {
      window.location.href = "login.html"; // Replace with login or homepage
    }, 2000); // Adjust time in milliseconds (2000ms = 2 seconds)
  });
});

// Availability Section
function setStatus(status) {
  document.getElementById("status").innerText = `Status: ${status}`;
}

// Change profile image
function triggerFileInput() {
  document.getElementById("fileInput").click();
}

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.querySelector(".profile-picture");
      img.src = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });

// Change name
document.getElementById("changeName").addEventListener("click", function () {
  const userName = document.getElementById("userName");
  const newNameInput = document.getElementById("newNameInput");
  const changeNameButton = document.getElementById("changeNameButton");
  const cancelNameButton = document.getElementById("cancelNameButton");
  const nameLabel = document.getElementById("nameLabel");

  // Toggle visibility of name and input fields
  newNameInput.style.display =
    newNameInput.style.display === "none" ? "block" : "none";
  newNameInput.value = userName.textContent;
  changeNameButton.style.display =
    changeNameButton.style.display === "none" ? "block" : "none";
  cancelNameButton.style.display =
    cancelNameButton.style.display === "none" ? "block" : "none";
  nameLabel.style.display =
    nameLabel.style.display === "none" ? "block" : "none";

  // Update name on "Change" button click
  changeNameButton.addEventListener("click", function () {
    userName.textContent = newNameInput.value;
    userName.style.display = "block";
  });

  // Cancel changes on "Cancel" button click
  cancelNameButton.addEventListener("click", function () {
    newNameInput.value = userName.textContent;
    userName.style.display = "block";
  });
});

// Change job title
document.getElementById("changeJob").addEventListener("click", function () {
  const jobTitle = document.getElementById("jobTitle");
  const newJobInput = document.getElementById("newJobInput");
  const changeJobButton = document.getElementById("changeJobButton");
  const cancelJobButton = document.getElementById("cancelJobButton");
  const jobLabel = document.getElementById("jobLabel");

  // Toggle visibility of job title and input fields
  newJobInput.style.display =
    newJobInput.style.display === "none" ? "block" : "none";
  newJobInput.value = jobTitle.textContent;
  changeJobButton.style.display =
    changeJobButton.style.display === "none" ? "block" : "none";
  cancelJobButton.style.display =
    cancelJobButton.style.display === "none" ? "block" : "none";
  jobLabel.style.display = jobLabel.style.display === "none" ? "block" : "none";

  // Update job title on "Change" button click
  changeJobButton.addEventListener("click", function () {
    jobTitle.textContent = newJobInput.value;
    jobTitle.style.display = "block";
  });

  // Cancel changes on "Cancel" button click
  cancelJobButton.addEventListener("click", function () {
    newJobInput.value = jobTitle.textContent;
    jobTitle.style.display = "block";
  });
});

// Change availability status
function setStatus(status) {
  document.getElementById("status").innerText = `Status: ${status}`;
}

// Change notifications status
function setNotifications(notificationsStatus) {
  document.getElementById(
    "notificationsStatus"
  ).innerText = `Notifications: ${notificationsStatus}`;
}

document.getElementById("notifications").addEventListener("click", function () {
  const notifications = document.getElementById("notifications");
  const notificationsStatus = document.getElementById("notificationsStatus");
  const notificationsOn = document.getElementById("notificationsOn");
  const notificationsOff = document.getElementById("notificationsOff");

  // Toggle visibility of notification field and buttons
  notificationsStatus.style.display =
    notificationsStatus.style.display === "none" ? "block" : "none";
  notificationsOn.style.display =
    notificationsOn.style.display === "none" ? "block" : "none";
  notificationsOff.style.display =
    notificationsOff.style.display === "none" ? "block" : "none";
});

// Change Location
document
  .getElementById("changeLocation")
  .addEventListener("click", function () {
    const currentLocation = document.getElementById("location");
    const newLocationInput = document.getElementById("newLocationInput");
    const changeLocationButton = document.getElementById(
      "changeLocationButton"
    );
    const cancelLocationButton = document.getElementById(
      "cancelLocationButton"
    );
    const locationLabel = document.getElementById("locationLabel");

    // Toggle visibility of location and input fields
    newLocationInput.style.display =
      newLocationInput.style.display === "none" ? "block" : "none";
    newLocationInput.value = currentLocation.textContent;
    changeLocationButton.style.display =
      changeLocationButton.style.display === "none" ? "block" : "none";
    cancelLocationButton.style.display =
      cancelLocationButton.style.display === "none" ? "block" : "none";
    locationLabel.style.display =
      locationLabel.style.display === "none" ? "block" : "none";

    // Update location on "Change" button click
    changeLocationButton.addEventListener("click", function () {
      currentLocation.textContent = newLocationInput.value;
      currentLocation.style.display = "block";
    });

    // Cancel changes on "Cancel" button click
    cancelLocationButton.addEventListener("click", function () {
      newLocationInput.value = currentLocation.textContent;
      currentLocation.style.display = "block";
    });
  });

// Change contact
document.getElementById("changeContact").addEventListener("click", function () {
  const currentEmail = document.getElementById("email");
  const newEmailInput = document.getElementById("newEmailInput");
  const currentPhone = document.getElementById("phone");
  const newPhoneInput = document.getElementById("newPhoneInput");
  const changeContactButton = document.getElementById("changeContactButton");
  const cancelContactButton = document.getElementById("cancelContactButton");
  const emailLabel = document.getElementById("emailLabel");
  const phoneLabel = document.getElementById("phoneLabel");

  // Toggle visibility of elements
  newEmailInput.style.display =
    newEmailInput.style.display === "none" ? "block" : "none";
  newEmailInput.value = currentEmail.textContent;
  newPhoneInput.style.display =
    newPhoneInput.style.display === "none" ? "block" : "none";
  newPhoneInput.value = currentPhone.textContent;
  changeContactButton.style.display =
    changeContactButton.style.display === "none" ? "block" : "none";
  cancelContactButton.style.display =
    cancelContactButton.style.display === "none" ? "block" : "none";
  emailLabel.style.display =
    emailLabel.style.display === "none" ? "block" : "none";
  phoneLabel.style.display =
    phoneLabel.style.display === "none" ? "block" : "none";
});

document
  .getElementById("changeContactButton")
  .addEventListener("click", function () {
    const currentEmail = document.getElementById("email");
    const newEmailInput = document.getElementById("newEmailInput");
    const currentPhone = document.getElementById("phone");
    const newPhoneInput = document.getElementById("newPhoneInput");

    // Update values and hide input fields
    currentEmail.textContent = newEmailInput.value;
    currentEmail.style.display = "block";
    currentPhone.textContent = newPhoneInput.value;
    currentPhone.style.display = "block";
  });

document
  .getElementById("cancelContactButton")
  .addEventListener("click", function () {
    const currentEmail = document.getElementById("email");
    const newEmailInput = document.getElementById("newEmailInput");
    const currentPhone = document.getElementById("phone");
    const newPhoneInput = document.getElementById("newPhoneInput");

    // Restore original values and hide input fields
    currentEmail.style.display = "block";
    newEmailInput.value = currentEmail.textContent;
    currentPhone.style.display = "block";
    newPhoneInput.value = currentPhone.textContent;
  });

// Change Password
document
  .getElementById("changePassword")
  .addEventListener("click", function () {
    const oldPasswordInput = document.getElementById("oldPasswordInput");
    const newPasswordInput = document.getElementById("newPasswordInput");
    const changePasswordButton = document.getElementById(
      "changePasswordButton"
    );
    const cancelPasswordButton = document.getElementById(
      "cancelPasswordButton"
    );
    const oldPasswordLabel = document.getElementById("oldPasswordLabel");
    const newPasswordLabel = document.getElementById("newPasswordLabel");

    // Toggle visibility of elements
    oldPasswordInput.style.display =
      oldPasswordInput.style.display === "none" ? "block" : "none";
    newPasswordInput.style.display =
      newPasswordInput.style.display === "none" ? "block" : "none";
    changePasswordButton.style.display =
      changePasswordButton.style.display === "none" ? "block" : "none";
    cancelPasswordButton.style.display =
      cancelPasswordButton.style.display === "none" ? "block" : "none";
    oldPasswordLabel.style.display =
      oldPasswordLabel.style.display === "none" ? "block" : "none";
    newPasswordLabel.style.display =
      newPasswordLabel.style.display === "none" ? "block" : "none";
  });

document
  .getElementById("changePasswordButton")
  .addEventListener("click", function () {
    // Clear the input fields
    oldPasswordInput.value = "";
    newPasswordInput.value = "";
  });

document
  .getElementById("cancelPasswordButton")
  .addEventListener("click", function () {
    // Clear the input fields
    oldPasswordInput.value = "";
    newPasswordInput.value = "";
  });

// Logout
const logOut = document.getElementById("logout-button");
logOut.addEventListener("click", () => {
  redirectToPage("../../loginPage/index.html");
});
function redirectToPage(url) {
  window.location.href = url;
}
