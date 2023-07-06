const heartButtons = document.querySelectorAll(".fa-regular.fa-heart");

// Add click event listener to each heart button
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const likeCounter = button.nextElementSibling.querySelector("span");
    const currentCount = parseInt(likeCounter.textContent);

    if (button.classList.contains("liked")) {
      // Decrease the count if button is already liked
      likeCounter.textContent = currentCount - 1;
      button.classList.remove("liked");
    } else {
      // Increase the count if button is not liked
      likeCounter.textContent = currentCount + 1;
      button.classList.add("liked");
    }
  });
});
