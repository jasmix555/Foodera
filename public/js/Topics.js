// your-script.js

// Function to toggle the "checked" class and update the counter value
function toggleTopic(button) {
  var counter = document.querySelector(".counter span");
  var count = parseInt(counter.innerText); // Get the current counter value

  if (button.classList.contains("checked")) {
    button.classList.remove("checked"); // Remove the "checked" class
    count--; // Decrease the counter value by one
    button.innerHTML = button.dataset.originalHtml; // Restore the original inner HTML
  } else {
    if (count >= 5) {
      return; // Limit the maximum number of buttons that can be clicked
    }
    button.classList.add("checked"); // Add the "checked" class
    count++; // Increase the counter value by one
    button.dataset.originalHtml = button.innerHTML; // Store the original inner HTML
    button.innerHTML = ""; // Remove the inner HTML of the button
  }

  counter.innerText = count; // Update the counter value
}

// Attach event listeners to topic buttons
const topicButtons = document.querySelectorAll(".topics button");
topicButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    toggleTopic(button);
  });
});
