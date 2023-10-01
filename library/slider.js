const images = document.querySelectorAll('.img-slider');
const sliderLine = document.querySelector('.slider-items');
// const widthSlide = (document.querySelector('.slider-photo').offsetWidth - 50) / 3  ; // подсчет ширины одного слайда


let count = 0;
let width;

// function init(){
//   console.log('resize');
//   width = document.querySelector('.slider-photo').offsetWidth;
//   sliderLine.style.width = width*images.length + 'px';
//   images.forEach( item => {
//     item.style.width = ((width - 40) / 3) + 'px'
//     item.style.height = 'auto';
//   })
//   console.log(width); 
// }

// window.addEventListener('resize', init);

// init();

function funcResize () {
  document.getElementById('1').classList.add('control-checked');
  document.getElementById('2').classList.remove('control-checked');
  document.getElementById('3').classList.remove('control-checked');
  document.getElementById('4').classList.remove('control-checked');
  document.getElementById('5').classList.remove('control-checked');
  count = 0;
  rollSlider();
}

window.addEventListener('resize', function() {
funcResize();

})

document.querySelector('.control1').addEventListener('click', function() { //первый индикатор
  document.getElementById('1').classList.add('control-checked');
  document.getElementById('2').classList.remove('control-checked');
  document.getElementById('3').classList.remove('control-checked');
  document.getElementById('4').classList.remove('control-checked');
  document.getElementById('5').classList.remove('control-checked');
  count = 0;
  rollSlider();
});

document.querySelector('.control2').addEventListener('click', function() { //второй индикатор
  document.getElementById('2').classList.add('control-checked');
  document.getElementById('1').classList.remove('control-checked');
  document.getElementById('3').classList.remove('control-checked');
  document.getElementById('4').classList.remove('control-checked');
  document.getElementById('5').classList.remove('control-checked');
  count = 1;
  rollSlider();
});

document.querySelector('.control3').addEventListener('click', function() { //третий индикатор
  document.getElementById('3').classList.add('control-checked');
  document.getElementById('1').classList.remove('control-checked');
  document.getElementById('2').classList.remove('control-checked');
  document.getElementById('4').classList.remove('control-checked');
  document.getElementById('5').classList.remove('control-checked');
  count = 2;
  rollSlider();
});

document.querySelector('.control4').addEventListener('click', function() { //четвертый индикатор
  document.getElementById('4').classList.add('control-checked');
  document.getElementById('1').classList.remove('control-checked');
  document.getElementById('2').classList.remove('control-checked');
  document.getElementById('3').classList.remove('control-checked');
  document.getElementById('5').classList.remove('control-checked');
  count = 3;
  rollSlider();
});

document.querySelector('.control5').addEventListener('click', function() { //пятый индикатор
  document.getElementById('5').classList.add('control-checked');
  document.getElementById('1').classList.remove('control-checked');
  document.getElementById('2').classList.remove('control-checked');
  document.getElementById('3').classList.remove('control-checked');
  document.getElementById('4').classList.remove('control-checked');
  count = 4;
  rollSlider();
});


function rollSlider() {
  sliderLine.style.transform = 'translate(-'+count*(475)+'px)';
}

function arrowActive() {
  if (count >= 4) {
    document.querySelector('.arrow-right').style.cursor = 'default';
  } else if (count  < 1) {
    document.querySelector('.arrow-left').style.cursor = 'default';
  } else {
    document.querySelector('.arrow-right').style.cursor = 'pointer';
    document.querySelector('.arrow-left').style.cursor = 'pointer';
  }
}


document.querySelector('.arrow-right').addEventListener('click', function() { //стрелка вправо
  if (count === 0) {
    document.getElementById('2').classList.add('control-checked');
    document.getElementById('1').classList.remove('control-checked');
    document.getElementById('3').classList.remove('control-checked');
    document.getElementById('4').classList.remove('control-checked');
    document.getElementById('5').classList.remove('control-checked');
    count++;
    rollSlider();
    arrowActive();
  } else if (count == 1) {
    document.getElementById('3').classList.add('control-checked');
    document.getElementById('1').classList.remove('control-checked');
    document.getElementById('2').classList.remove('control-checked');
    document.getElementById('4').classList.remove('control-checked');
    document.getElementById('5').classList.remove('control-checked');
    count++;
    rollSlider();
    arrowActive();
  } else if (count == 2) {
    document.getElementById('4').classList.add('control-checked');
    document.getElementById('1').classList.remove('control-checked');
    document.getElementById('2').classList.remove('control-checked');
    document.getElementById('3').classList.remove('control-checked');
    document.getElementById('5').classList.remove('control-checked');
    count++;
    rollSlider();
    arrowActive();
  } else if (count == 3) {
    document.getElementById('5').classList.add('control-checked');
    document.getElementById('1').classList.remove('control-checked');
    document.getElementById('2').classList.remove('control-checked');
    document.getElementById('3').classList.remove('control-checked');
    document.getElementById('4').classList.remove('control-checked');
    count++;
    rollSlider();
    arrowActive();
  }
})

document.querySelector('.arrow-left').addEventListener('click', function() { //стрелка влево
if (count == 1) {
    document.getElementById('1').classList.add('control-checked');
    document.getElementById('2').classList.remove('control-checked');
    document.getElementById('3').classList.remove('control-checked');
    document.getElementById('4').classList.remove('control-checked');
    document.getElementById('5').classList.remove('control-checked');
    count--;
    rollSlider();
    arrowActive();
  } else if (count == 2) {
    document.getElementById('2').classList.add('control-checked');
    document.getElementById('1').classList.remove('control-checked');
    document.getElementById('3').classList.remove('control-checked');
    document.getElementById('4').classList.remove('control-checked');
    document.getElementById('5').classList.remove('control-checked');
    count--;
    rollSlider();
    arrowActive();
  } else if (count == 3) {
    document.getElementById('3').classList.add('control-checked');
    document.getElementById('1').classList.remove('control-checked');
    document.getElementById('2').classList.remove('control-checked');
    document.getElementById('4').classList.remove('control-checked');
    document.getElementById('5').classList.remove('control-checked');
    count--;
    rollSlider();
    arrowActive();
  } else if (count == 4) {
    document.getElementById('4').classList.add('control-checked');
    document.getElementById('1').classList.remove('control-checked');
    document.getElementById('2').classList.remove('control-checked');
    document.getElementById('3').classList.remove('control-checked');
    document.getElementById('5').classList.remove('control-checked');
    count--;
    rollSlider();
    arrowActive();
  }
})