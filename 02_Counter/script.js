let count = 0;
const value = document.querySelector("#value");
// We can select individual buttons but then we would have Event Listeners for each with different values

// It's better to select all the buttons and then use forEach
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const type = e.currentTarget.classList;
    if (type.contains("decrease")) {
      count--;
    } else if (type.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    value.textContent = count;
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});
