const shareBtn = document.querySelectorAll(".fa-share");
const shareWrapper = document.querySelector(".share-wrapper");
const xMark = document.querySelector(".fa-xmark");

shareBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    shareWrapper.style.display = "block";
  });
});

xMark.addEventListener("click", (e) => {
  shareWrapper.style.display = "none";
});

shareWrapper.addEventListener("click", (e) => {
  if (e.target === shareWrapper) {
    shareWrapper.style.display = "none";
  }
});
