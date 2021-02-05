const currentLocationOptions = {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const utcOptions = {
  timeZone: "Etc/GMT",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const clock = () => {
  const currentDate = new Date();
  const clock = document.querySelector(".current-time");
  clock.innerHTML = currentDate.toLocaleTimeString(
    "en-US",
    currentLocationOptions
  );
  const utcClock = document.querySelector(".utc-time");
  utcClock.innerHTML = currentDate.toLocaleTimeString("en-US", utcOptions);
};

const createClock = () => {
  clock();
  setInterval(clock, 1000);
};

export default createClock;
