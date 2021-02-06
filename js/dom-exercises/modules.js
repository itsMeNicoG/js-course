import createHamburgerMenu from "./hamburger.js";
import createClock, { changeAlarmStatus } from "./clock.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  createHamburgerMenu(
    d.querySelector(".hamburger"),
    d.getElementById("hamburger-menu")
  );
  let [clockBtn, utcClockBtn] = d.querySelectorAll(".clock-status");
  createClock(
    d.querySelector(".current-time"),
    d.querySelector(".utc-time"),
    clockBtn,
    utcClockBtn
  );
  for (let alarmBtn of document.querySelectorAll(".alarm-status")) {
    changeAlarmStatus(alarmBtn, document.getElementById("alarm-sound"));
  }
});
