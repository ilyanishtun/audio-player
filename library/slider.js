const images = document.querySelectorAll('.img-slider');
const sliderLine = document.querySelector('.slider-items');

let count = 0;
let width;

function init(){
  console.log('resize');
  width = document.querySelector('.slider-photo').offsetWidth;
  sliderLine.style.width = width*images.length + 'px';
  images.forEach( item => {
    item.style.width = (width / 3 - 15) + 'px'
    item.style.height = 'auto';
  })
  console.log(width); 
}

window.addEventListener('resize', init);

init();

document.querySelector('.control2').addEventListener('click', function() {
  count++;
  rollSlider();
});



function rollSlider() {
  sliderLine.style.transform = 'translate(-'+count*(width / 3)+'px)';
}