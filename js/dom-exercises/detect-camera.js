export default function detectCamera(sectionId) {
  let stream;
  let cameraConstraints = {
    audio: false,
    video: true,
  };
  let $section = document.getElementById(sectionId);
  async function showError(e) {
    const $errorMessage = `
    <div id="camera-error"><h1>Unable to access the camera:</h1>
    <h1>${e}</h1>
    <h1>Make sure you have given the correct permissions and reload</h1></div>`;
    $section.innerHTML = $errorMessage;
  }
  async function show(stream) {
    let video = document.createElement("video");
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", (e) => {
      video.play();
      $section.appendChild(video);
    });
  }
  async function detect() {
    try {
      stream = await navigator.mediaDevices.getUserMedia(cameraConstraints);
      show(stream);
    } catch (e) {
      console.log(e);
      showError(e);
    }
  }
  detect();

  cameraObjec;
}
