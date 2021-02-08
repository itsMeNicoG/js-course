const d = document;

export default function createScrollButton(button) {
  const scrollButton = document.querySelector(button);
  scrollButton.addEventListener("click", (e) => {
    window.location.href = "./dom-exercises.html#clock-section";
  });
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 100) {
      scrollButton.classList.remove("disabled");
    } else {
      scrollButton.classList.add("disabled");
    }
  });
}
