const createHamburgerMenu = () => {
  const $menuButton = document.querySelector(".hamburger");
  const $menu = document.getElementById("hamburger-menu");

  const toggleMenu = () => {
    $menuButton.classList.toggle("is-active");
    $menu.classList.toggle("is-active");
  };

  $menuButton.addEventListener("click", toggleMenu);

  $menu.addEventListener("click", toggleMenu);
};

export default createHamburgerMenu;
