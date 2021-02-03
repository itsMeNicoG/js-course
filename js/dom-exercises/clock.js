const clock = () => {
  const clock = document.getElementById("current-time");
  clock.innerHTML = new Date().toLocaleTimeString();
};

const createClock = () => setInterval(clock, 1000);

export default createClock;
