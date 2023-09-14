const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menu = document.querySelector('.menu');
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.querySelector(".menu-auth").classList.remove("_active");
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
  
    document.querySelector(".menu__icon").classList.remove("_active");
    document.querySelector(".menu").classList.remove("_active");
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


document.querySelector('.login-click').addEventListener('click', function() { // обработка клика на иконку профиля
  document.querySelector('.modal-window').classList.toggle('_active');
  document.body.classList.toggle('_lock');
  document.querySelector(".menu-auth").classList.remove("_active");
});

document.querySelector('.card-right-button').addEventListener('click', function() {
  document.querySelector('.modal-window').classList.toggle('_active');
  document.body.classList.toggle('_lock');
  document.querySelector(".menu-auth").classList.remove("_active");
})

document.querySelector('.register-click').addEventListener('click', function() { // обработка клика на иконку профиля
  document.querySelector('.modal-window2').classList.toggle('_active');
  document.body.classList.toggle('_lock');
  document.querySelector(".menu-auth").classList.remove("_active");
});


document.getElementById('close-btn1').addEventListener('click', function() { // обработка клика на иконку профиля
  document.querySelector('.modal-window').classList.remove('_active');
  document.body.classList.remove('_lock');
});

document.getElementById('close-btn2').addEventListener('click', function() { // обработка клика на иконку профиля
  document.querySelector('.modal-window2').classList.remove('_active');
  document.body.classList.remove('_lock');
});

document.querySelector('.login-click').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.querySelector('.modal-login').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".modal-window").classList.remove("_active");
  
});

document.querySelector('.register-click').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.querySelector('.modal-login2').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".modal-window2").classList.remove("_active");
  
});



// document.querySelector('.close-btn').addEventListener('click', function() {
//   // document.querySelector('.modal-window').classList.remove('_active');
//   // document.body.classList.remove('_lock');
// });

// document.getElementById('.close-btn').addEventListener('click', function() {
//   document.querySelector('.modal-window').classList.remove('_active');
//   document.body.classList.remove('_lock');
// });