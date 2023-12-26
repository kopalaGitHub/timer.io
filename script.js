let days = document.getElementById("days");
let hours = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

let daysInt = parseInt(days.innerHTML, 10);
let hoursInt = parseInt(hours.innerHTML, 10);
let minInt = parseInt(min.innerHTML, 10);
let secInt = parseInt(sec.innerHTML, 10);

if (secInt < 10) {
  sec.innerHTML = "0" + secInt;
}
if (minInt < 10) {
  min.innerHTML = "0" + minInt;
}
if (hoursInt < 10) {
  hours.innerHTML = "0" + hoursInt;
}
if (daysInt < 10) {
  days.innerHTML = "0" + daysInt;
}

const intervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
  if (daysInt === 0 && hoursInt === 0 && minInt === 0 && secInt === 0) {
    clearInterval(intervalId);
  } else {
    if (secInt > 0) {
      secInt--;
      if (secInt < 10) {
        sec.innerHTML = "0" + secInt;
      } else {
        sec.innerHTML = secInt;
      }
    } else {
      secInt = 59;
      sec.innerHTML = secInt;
      if (minInt > 0) {
        minInt--;
        if (minInt < 10) {
          min.innerHTML = "0" + minInt;
        } else {
          min.innerHTML = minInt;
        }
      } else {
        minInt = 59;
        min.innerHTML = minInt;

        if (hoursInt > 0) {
          hoursInt--;
          if (daysInt < 10) {
            days.innerHTML = "0" + daysInt;
          } else {
            hours.innerHTML = hoursInt;
          }
        } else {
          hoursInt = 23;
          hours.innerHTML = hoursInt;

          if (daysInt > 0) {
            daysInt--;
            if (daysInt < 10) {
              days.innerHTML = "0" + daysInt;
            } else {
              days.innerHTML = daysInt;
            }
          }
        }
      }
    }
  }
}

// let days = document.getElementById("days");
// let hours = document.getElementById("hours");
// let min = document.getElementById("minutes");
// let sec = document.getElementById("seconds");

// let intervalId = setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   let daysInt = parseInt(days.innerHTML, 10);
//   let hoursInt = parseInt(hours.innerHTML, 10);
//   let minInt = parseInt(min.innerHTML, 10);
//   let secInt = parseInt(sec.innerHTML, 10);

//   if (daysInt === 0 && hoursInt === 0 && minInt === 0 && secInt === 0) {
//     clearInterval(intervalId);
//   } else {
//     if (secInt > 0) {
//       sec.innerHTML = secInt;
//       secInt--;
//     } else {
//       sec.innerHTML = secInt = 59;
//       if (minInt > 0) {
//         minInt--;
//         min.innerHTML = minInt;
//       } else {
//         min.innerHTML = minInt = 59;
//         if (hoursInt > 0) {
//           hoursInt--;
//           hours.innerHTML = hoursInt;
//         } else {
//           hours.innerHTML = hoursInt = 23;
//           if (daysInt > 0) {
//             daysInt--;
//             days.innerHTML = daysInt;
//           }
//         }
//       }
//     }
//   }
// }
// If you want to reset the interval when 'else' block is executed
