// Function to toggle the "checked" class and update the counter value
function toggleTopic(button) {
  if (button.classList.contains("checked")) {
    button.classList.remove("checked"); // Remove the "checked" class // Decrease the counter value by one
    button.innerHTML = "Follow"; // Restore the original inner HTML
  } else {
    button.classList.add("checked"); // Add the "checked" class
    button.dataset.originalHtml = button.innerHTML; // Store the original inner HTML
    button.innerHTML = ""; // Remove the inner HTML of the button
  }
}

// Attach event listeners to topic buttons
const flwBtn = document.querySelectorAll(".follow-btn button");
flwBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    toggleTopic(button);
  });
});
