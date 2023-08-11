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
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menu.classList.remove('_active');
          });
      }
}());

if (iconMenu.classList.contains('_active')) {
  menuLinks[i].addEventListener('click', () => {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menu.classList.remove('_active');});
}

