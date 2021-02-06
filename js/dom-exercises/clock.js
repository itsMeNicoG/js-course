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

const createClock = ($clock, options) => {
  const currentDate = new Date();
  $clock.innerHTML = currentDate.toLocaleTimeString("en-US", options);
  const interval = setInterval(() => {
    const currentDate = new Date();
    $clock.innerHTML = currentDate.toLocaleTimeString("en-US", options);
  });
  return interval;
};

const runClock = ($clock, $utcClock, $clockBtn, $utcClockBtn) => {
  const currentClock = createClock($clock, currentLocationOptions);
  const utcClock = createClock($utcClock, utcOptions);
  $clockBtn.addEventListener("click", (e) =>
    changeClockStatus($clock, currentLocationOptions, $clockBtn, currentClock)
  );
  $utcClockBtn.addEventListener("click", (e) =>
    changeClockStatus($utcClock, utcOptions, $utcClockBtn, utcClock)
  );
};

function changeClockStatus($clock, options, $clockBtn, interval) {
  if ($clockBtn.innerHTML === "Stop Clock") {
    clearInterval(interval);
    $clockBtn.innerHTML = "Start Clock";
  } else {
    createClock($clock, options);
    $clockBtn.innerHTML = "Stop Clock";
  }
}

export function changeAlarmStatus($alarmBtn, $audio) {
  $alarmBtn.addEventListener("click", (e) => {
    if ($audio.paused) {
      $audio.play();
      $alarmBtn.innerHTML = "Stop Alarm";
    } else {
      $audio.pause();
      $alarmBtn.innerHTML = "Start Alarm";
    }
  });
}

export default runClock;
