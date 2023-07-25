const input = document.querySelectorAll("#comment");
const submit = document.querySelectorAll("#submit");

submit.forEach((ev) => {
  ev.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const inputVal = ev
      .closest(".post-button-wrapper")
      .querySelector("#comment").value;
    const inputWrapper = ev
      .closest(".post-button-wrapper")
      .querySelector("#comment");
    const wrapper = ev.closest(".post-wrapper , .user-post-wrapper");
    const textWrapper = wrapper.querySelector(".post-info-text");
    //else, take the inputted value of the text area and send it(or let a addtext variable work
    if (inputWrapper.value == "") {
      inputWrapper.value = "";
    } else {
      addText(textWrapper, inputVal);
      inputWrapper.value = "";
    }
  });
});

input.forEach((ev) => {
  ev.addEventListener("keypress", function (e) {
    const inputVal = ev
      .closest(".post-button-wrapper")
      .querySelector("#comment").value;
    const inputWrapper = ev
      .closest(".post-button-wrapper")
      .querySelector("#comment");
    const wrapper = ev.closest(".post-wrapper , .user-post-wrapper");
    const textWrapper = wrapper.querySelector(".post-info-text");
    //when enter is pressed or also when the there is no text in the textarea
    if (e.code === "Enter" && !ev.value == "") {
      //prevent a bug where it opens a whole new website instead of staying in the same page
      //take the textarea value and enter it to the list
      addText(textWrapper, inputVal);
      //after taking the value, erase the past value so that is looks clean
      inputWrapper.value = "";
    } else if (e.code === "Enter" && ev.value == "") {
      //when there is no text inputted, alert that there needs to be a text
      e.preventDefault();
    }
  });
});

//by adding two variables, we can then make let the variables work on ther codes
function addText(evnt, text) {
  evnt.innerHTML += `
  <div class="post-comment-wrapper">
    <div class="post-text-prof">
      <a href="#" style="background-image: url(../public/img/people/0.jpeg);"></a>
      </div>
      <div class="prof-comment-name">
        <h3>Jason</h3>
      </div>
      <p class="post-comment">${text}</p>
      <div class="post-like">
        <button class="fa-regular fa-heart" onclick="toggleHeart(event)"></button>
      </div>
  </div>
  `;
}

function toggleHeart(e) {
  if (e.target.classList.contains("fa-regular")) {
    e.target.classList.remove("fa-regular");
    e.target.classList.add("fa-solid");
    e.target.classList.add("fa-beat");
    setTimeout(() => {
      e.target.classList.remove("fa-beat");
    }, 1000);
  } else {
    e.target.classList.remove("fa-solid");
    e.target.classList.add("fa-regular");
  }
}

const likeWrapper = document.querySelectorAll(".fa-heart");

for (let i = 0; i < likeWrapper.length; i++) {
  likeWrapper[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-regular")) {
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      e.target.classList.add("fa-beat");
      setTimeout(() => {
        e.target.classList.remove("fa-beat");
      }, 1000);
    } else {
      e.target.classList.remove("fa-solid");
      e.target.classList.add("fa-regular");
    }
  });
}

const saveWrapper = document.querySelectorAll(".fa-bookmark");
const saveCounter = document.querySelectorAll(".save-counter span");

for (let i = 0; i < saveWrapper.length; i++) {
  saveWrapper[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-regular")) {
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      e.target.classList.add("fa-beat");
      setTimeout(() => {
        e.target.classList.remove("fa-beat");
      }, 1000);
      increaseCounter(i); // Call function to increase the counter
    } else {
      e.target.classList.remove("fa-solid");
      e.target.classList.add("fa-regular");
      decreaseCounter(i); // Call function to decrease the counter
    }
  });
}

function increaseCounter(index) {
  // Add 1 to the counter value
  let currentValue = parseInt(saveCounter[index].textContent);
  saveCounter[index].textContent = currentValue + 1;
}

function decreaseCounter(index) {
  // Decrease the counter value by 1
  let currentValue = parseInt(saveCounter[index].textContent);
  saveCounter[index].textContent = currentValue - 1;
}
