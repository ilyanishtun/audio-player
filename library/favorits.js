

document.getElementById('winter').addEventListener('click', function() { 

      document.querySelector('.book-slide1').classList.add('book-active');

      document.querySelector('.book-slide2').classList.remove('book-active');
      document.querySelector('.book-slide3').classList.remove('book-active');
      document.querySelector('.book-slide4').classList.remove('book-active');
});

document.getElementById('spring').addEventListener('click', function() { 

  document.querySelector('.book-slide2').classList.add('book-active');

  document.querySelector('.book-slide1').classList.remove('book-active');
  document.querySelector('.book-slide3').classList.remove('book-active');
  document.querySelector('.book-slide4').classList.remove('book-active');
});

document.getElementById('summer').addEventListener('click', function() { 

  document.querySelector('.book-slide3').classList.add('book-active');

  document.querySelector('.book-slide1').classList.remove('book-active');
  document.querySelector('.book-slide2').classList.remove('book-active');
  document.querySelector('.book-slide4').classList.remove('book-active');
});

document.getElementById('autumn').addEventListener('click', function() { 

  document.querySelector('.book-slide4').classList.add('book-active');

  document.querySelector('.book-slide1').classList.remove('book-active');
  document.querySelector('.book-slide2').classList.remove('book-active');
  document.querySelector('.book-slide3').classList.remove('book-active');
});