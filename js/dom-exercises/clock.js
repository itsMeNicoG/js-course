const options = {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const clock = () => {
  const clock = document.querySelector(".current-time");
  clock.innerHTML = new Date().toLocaleTimeString("en-US", options);
  const utcClock = document.querySelector(".utc-time");
  utcClock.innerHTML = new Date().toLocaleTimeString("UTC", options);
};

const createClock = () => {
  clock();
  setInterval(clock, 1000);
};

export default createClock;
