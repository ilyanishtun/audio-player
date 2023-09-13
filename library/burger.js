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


//Закрыть меню при клике вне его
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



// const iconMenu = document.querySelector(".menu__icon");
// if (iconMenu) {
//   const menu = document.querySelector('.menu');
//   iconMenu.addEventListener("click", function(e) {
//     document.body.classList.toggle('_lock');
//     iconMenu.classList.toggle('_active');
//     menu.classList.toggle('_active');
//   });
// }  


const iconProfile = document.querySelector(".icon-profile");
if (iconProfile) {
  const menuAuth = document.querySelector('.menu-auth');
  iconProfile.addEventListener("click", function(e) {
  
    iconProfile.classList.toggle('_active');
    menuAuth.classList.toggle('_active');
  });
}  

// document.querySelector('.icon-profile').addEventListener('click', function() {

  
//   document.querySelector('.icon-profile').classList.add('icon-profile-active');

// } );

document.querySelector('.icon-profile').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.querySelector('.menu-auth').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".menu-auth").classList.remove("_active");
});

// document.querySelector('.icon-profile-active').addEventListener('click', function() {
//   document.querySelector(".menu-auth").classList.remove("_active");
//   document.querySelector('.menu-auth').classList.remove('_active');
//   document.querySelector('.icon-profile').classList.remove('icon-profile-active');

// })


