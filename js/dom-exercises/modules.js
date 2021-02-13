import createHamburgerMenu from "./hamburger.js";
import createClock, { changeAlarmStatus } from "./clock.js";
import drawCanvas from "./keyboard-events.js";
import createScrollButton from "./scroll.js";
import toggleMode from "./toggle.js";
import countDown from "./countdown.js";

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
  drawCanvas("#drawing-canvas");
  createScrollButton(".scroll");
  toggleMode("toggle-colors");
  countDown("#start-countdown");
});
