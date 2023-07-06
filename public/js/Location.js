{
  const button = document.querySelector(".location-main button");
  const icon = document.querySelector(".fa-chevron-down");

  button.addEventListener("click", function () {
    icon.classList.toggle("rotated");
  });
}
