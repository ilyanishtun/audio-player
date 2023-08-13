const ICON_MENU = document.querySelector('.menu__icon');
if (iconMenu) {
  const MENU = document.querySelector('.menu');
  ICON_MENU.addEventListener("click", function(e) {
    ICON_MENU.classList.toggle('_active');
  });
}  