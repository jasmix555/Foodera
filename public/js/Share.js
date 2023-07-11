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

const bookmarkBtn = document.querySelectorAll(".fa-bookmark");
const bookmarkWrap = document.querySelector(".bookmark-save-wrapper");
const bookmarkClose = document.querySelector(".save-close");

bookmarkBtn.forEach((btn) => {
  bookmarkBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.classList.contains("fa-solid")) {
        bookmarkWrap.style.transform = "translateY(0)";
      }
    });
  });
});

bookmarkClose.addEventListener("click", (e) => {
  bookmarkWrap.style.transform = "translateY(100%)";
});

bookmarkWrap.addEventListener("click", (e) => {
  if (e.target === bookmarkWrap) {
    bookmarkWrap.style.transform = "translateY(100%)";
  }
});
