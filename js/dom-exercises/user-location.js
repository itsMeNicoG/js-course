export default function getLocation(sectionId) {
  const $section = document.getElementById(sectionId);

  const locationCompleted = (position) => {
    $section.innerHTML = "";
    console.log(position);
    const $locationMessage = `
    <h1>Looks like this is where you're located:</h1>
    <h1>Latitude: ${position.coords.latitude}  , Longitude: ${position.coords.longitude}  </h1>
    <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},19z"> VIEW MAP </a>`;
    $section.innerHTML = $locationMessage;
  };

  const errorLocating = (error) => {
    console.log(error);
    $section.innerHTML = "";
    const $errorMessage = `
    <h1>Unable to geolocate:</h1>
    <h1>${error.message}</h1>
    <h1>Make sure you have given the correct permissions and reload</h1>`;
    $section.innerHTML = $errorMessage;
  };

  const locate = () => {
    navigator.geolocation.getCurrentPosition(locationCompleted, errorLocating);
  };

  locate();
  navigator.permissions
    .query({ name: "geolocation" })
    .then((permissions) => permissions.addEventListener("change", locate));
}
