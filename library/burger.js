const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menu = document.querySelector('.menu');
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menu.classList.toggle('_active');
  });
}  

(function () {
  const menuLinks = document.querySelectorAll('.menu-link');
      for (let i = 0; i < menuLinks.length; i += 1) {
          menuLinks[i].addEventListener('click', () => {
            document.querySelector(".menu").classList.remove("_active");
            document.querySelector(".menu__icon").classList.remove("_active");
            document.body.classList.remove('_lock');
          });
      }
}());


// Закрыть меню при клике вне его
document.getElementById("menu__icon").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".menu").classList.remove("_active");
  document.querySelector(".menu__icon").classList.remove("_active");
  document.body.classList.remove('_lock');
});


