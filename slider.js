const arrowLeft = document.querySelector('.button-left');
const arrowRight = document.querySelector('.button-right');
const slides = document.querySelectorAll('.img-slider');
let current = 0;

function slider() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
}

arrowLeft.addEventListener('click', function () {
    slider()
});

arrowRight.addEventListener('click', function () {
    slider()
});


setInterval(() => slider(), 4000);
