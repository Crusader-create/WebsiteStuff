const images = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg'
];
let current = 0;

function showSlide() {
  let slideshow = document.getElementById('slideshow');
  slideshow.src = images[current];
  current = (current + 1) % images.length;
}

window.addEventListener('DOMContentLoaded', () => {
  showSlide();   
  setInterval(showSlide, 3000); 
});
