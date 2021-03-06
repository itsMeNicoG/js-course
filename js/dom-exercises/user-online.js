export default function userOnline() {
  const statusUpdate = (e) => {
    const status = navigator.onLine ? "online" : "offline";
    const $alertBanner = document.createElement("div");
    const statusMessageText = document.createTextNode(`Going ${status}...`);
    const $statusMessage = document.createElement("h1");
    $alertBanner.classList.add("status-banner");
    $statusMessage.appendChild(statusMessageText);
    $alertBanner.appendChild($statusMessage);
    status === "online"
      ? $alertBanner.classList.add("online")
      : $alertBanner.classList.add("offline");
    document.body.insertAdjacentElement("afterbegin", $alertBanner);
    console.log($statusMessage);
    console.log($alertBanner);
    setTimeout(() => {
      $alertBanner.remove();
    }, 2000);
  };

  window.addEventListener("online", statusUpdate);
  window.addEventListener("offline", statusUpdate);
}
