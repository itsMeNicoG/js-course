const map = `<iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=45.44610078350057~-75.68505894776122&lvl=15&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
</iframe>`;
const video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/zhl-Cs1-sG4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
const mapLink = `<a href="https://www.google.com/maps/@45.450407,-75.686767,15z?hl=en-US">VIEW MAP</a>`;
const videoLink = `<a href="https://www.youtube.com/watch?v=zhl-Cs1-sG4">WATCH VIDEO</a>`;

const beResponsive = ($section) => {
  $section.innerHTML = "";
  if (window.innerWidth < 1000) {
    $section.innerHTML += mapLink;
    $section.innerHTML += videoLink;
  } else {
    $section.innerHTML += map;
    $section.innerHTML += video;
  }
};

export default function loadResponsiveSection(section) {
  const $section = document.getElementById(section);
  beResponsive($section);
  window.addEventListener("resize", (e) => beResponsive($section));
}
