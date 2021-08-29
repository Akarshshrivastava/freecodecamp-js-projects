const colors = [
  "Green",
  "Red",
  "rgba(133,122,200)",
  "#f15025",
  "Blue",
  "lightcoral",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // Get Random Number between 0-3 for index of color array
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
