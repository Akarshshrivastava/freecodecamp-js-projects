const btns = document.querySelectorAll(".question-btn");

// ** Using Selectors **

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  // NOTE - Do not use document.querySelector as it will select from the entire DOM

  btn.addEventListener("click", function () {
    // Functionality to open only one question-text at a time
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// ** Traversing the DOM **

// We are starting from each button and going upwards to reach the question div

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const quesion = e.currentTarget.parentElement.parentElement;
//     quesion.classList.toggle("show-text");
//   });
// });
