const input = document.querySelector("#comment");
const submit = document.querySelector("#submit");
console.log(input, submit);
const textWrapper = document.querySelector(".post-info-text");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (input.value == 0) {
  }
  //else, take the inputted value of the text area and send it(or let a addtext variable work)
  else {
    addText();
    input.value = "";
  }
});

input.addEventListener("keypress", function (e) {
  //when enter is pressed or also when the there is no text in the textarea
  if (e.code === "Enter" && !input.value == "") {
    //prevent a bug where it opens a whole new website instead of staying in the same page
    //take the textarea value and enter it to the list
    addText();
    //after taking the value, erase the past value so that is looks clean
    input.value = "";
  } else if (e.code === "Enter" && input.value == "") {
    //when there is no text inputted, alert that there needs to be a text
    e.preventDefault();
  }
});

function addText() {
  textWrapper.innerHTML += `
  <div class="post-comment-wrapper">
    <div class="post-text-prof">
      <a href="#" style="background-image: url(../public/img/people/0.jpeg);"></a>
      </div>
      <div class="prof-comment-name">
        <h3>Jason</h3>
      </div>
      <p class="post-comment">${input.value}</p>
  </div>
  `;
}
