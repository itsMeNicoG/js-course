import createHamburgerMenu from "./hamburger.js";
import createClock, { changeAlarmStatus } from "./clock.js";
import drawCanvas from "./keyboard-events.js";
import createScrollButton from "./scroll.js";
import toggleMode from "./toggle.js";
import countDown from "./countdown.js";
import loadResponsiveSection from "./responsive-js.js";
import responsiveTester from "./responsive-tester.js";
import detectUser from "./user-detection.js";
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
  for (let alarmBtn of d.querySelectorAll(".alarm-status")) {
    changeAlarmStatus(alarmBtn, d.getElementById("alarm-sound"));
  }
  drawCanvas("#drawing-canvas");
  createScrollButton(".scroll");
  toggleMode("toggle-colors");
  countDown("#start-countdown");
  loadResponsiveSection("responsive-js");
  responsiveTester("responsive-form");
  detectUser("user-detection");
});
