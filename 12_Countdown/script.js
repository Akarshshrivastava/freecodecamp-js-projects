const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadLine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// For Giveaway Date 10 days from now
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Month is being used from the array
let month = futureDate.getMonth(); // 0-11
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()]; // 0-6

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

// Future Time in milliseconds
const futureTime = futureDate.getTime();
let countdown = setInterval(getRemainingTime, 1000);
function getRemainingTime() {
  const today = new Date().getTime();
  const remainingTime = futureTime - today;

  // Number of milliseconds in one day
  const oneDay = 24 * 60 * 60 * 1000;

  // Number of milliseconds in one day
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // Remaining Duration
  let remainingDays = Math.floor(remainingTime / oneDay);
  let remainingHours = Math.floor((remainingTime % oneDay) / oneHour);
  let remainingMinutes = Math.floor(
    (remainingTime % remainingHours) / oneMinute
  );
  let remainingSeconds = Math.floor((remainingTime % oneMinute) / oneSecond);

  // Set values array
  let values = [
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  ];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (remainingTime < 0) {
    clearInterval(countdown);
    deadLine.innerHTML = `<h4 class="expired">Giveway has expired</h4>`;
  }
}
