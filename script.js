let daysId = document.getElementById("days");
let hoursId = document.getElementById("hours");
let minutesId = document.getElementById("minutes");
let secondsId = document.getElementById("seconds");

const targetDate = new Date("2024-02-01T00:00:00Z").getTime();
const currentDate = new Date().getTime();
const timeRemaining = targetDate - currentDate;

let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
let hours = Math.floor(
  (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

displayNum(seconds, secondsId);
displayNum(minutes, minutesId);
displayNum(hours, hoursId);
displayNum(days, daysId);

const intervalId = setInterval(updateCountdown, 1000);

function displayNum(numberValue, htmlText) {
  if (numberValue < 10) {
    htmlText.innerHTML = "0" + numberValue;
  } else {
    htmlText.innerHTML = numberValue;
  }
}
function endTime() {
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
  }
}

function updateCountdown() {
  updateSec();

  displayNum(seconds, secondsId);
  displayNum(minutes, minutesId);
  displayNum(hours, hoursId);
  displayNum(days, daysId);

  endTime();
}

function updateSec() {
  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    updateMin();
  }
}
function updateMin() {
  if (minutes > 0) {
    minutes--;
  } else {
    minutes = 59;
    updateHour();
  }
}
function updateHour() {
  if (hours > 0) {
    hours--;
  } else {
    hours = 23;
    updateDay();
  }
}
function updateDay() {
  days--;
}
