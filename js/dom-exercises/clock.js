const options = {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const clock = () => {
  const clock = document.getElementById("current-time");
  clock.innerHTML = new Date().toLocaleTimeString("en-US", options);
};

const createClock = () => setInterval(clock, 1000);

export default createClock;
