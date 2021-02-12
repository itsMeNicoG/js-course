const getRemainingTime = (targetDate) => {
  let leftOfDate = targetDate - new Date();
  if (leftOfDate <= 0)
    return `${targetDate.toLocaleDateString()} is already here!`;
  const days = Math.floor(leftOfDate / 1000 / 60 / 60 / 24);
  leftOfDate -= days * 24 * 60 * 60 * 1000;
  const hours = Math.floor(leftOfDate / 1000 / 60 / 60);
  leftOfDate -= hours * 60 * 60 * 1000;
  const minutes = Math.floor(leftOfDate / 1000 / 60);
  leftOfDate -= minutes * 60 * 1000;
  console;
  const seconds = Math.floor(leftOfDate / 1000);
  leftOfDate -= seconds * 1000;
  console.log(seconds);
  return `${days > 0 ? `${days} days` : ""} ${
    hours > 0 ? `${hours} hours` : ""
  } ${minutes > 0 ? `${minutes} minutes and` : ""} ${seconds} seconds to go!`;
};

const showMessage = (message, $textField) => {
  $textField.innerText = message;
};

const startCount = (e) => {
  const $startButton = e.target;
  const $datePicker = e.target.previousElementSibling;
  const $countdownText = $datePicker.previousElementSibling;
  const targetDate = new Date(`${$datePicker.value}T00:00:00`);
  $datePicker.style.display = "none";
  $startButton.style.display = "none";
  showMessage(getRemainingTime(targetDate), $countdownText);
  setInterval(
    () => showMessage(getRemainingTime(targetDate), $countdownText),
    1000
  );
};

const setInitialDate = ($datePicker) => {
  let today = new Date();
  today = `${today.getFullYear()}-${
    today.getMonth > 10 ? today.getMonth() : `0${today.getMonth() + 1}`
  }-${today.getDate()}`;
  $datePicker.value = today;
  $datePicker.min = today;
};

export default function countDown(startSelector) {
  const startButton = document.querySelector(startSelector);
  setInitialDate(startButton.previousElementSibling);
  startButton.addEventListener("click", startCount);
}
