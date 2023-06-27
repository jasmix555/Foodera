const shareBtn = document.querySelectorAll(".fa-share");
const shareWrapper = document.querySelector(".share-wrapper");
const xMark = document.querySelector(".fa-xmark");

shareBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    shareWrapper.style.transform = "translateY(0)";
  });
});

xMark.addEventListener("click", (e) => {
  shareWrapper.style.transform = "translateY(100%)";
});

shareWrapper.addEventListener("click", (e) => {
  if (e.target === shareWrapper) {
    shareWrapper.style.transform = "translateY(100%)";
  }
});
