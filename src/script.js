// Menú móvil
document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('mainMenu').classList.toggle('active');
});

//Slider
let currentIndex = 0;
const images = document.querySelectorAll('.sliderItem');
const totalImages = images.length;
//Mueve al siguiente índice de la imagen
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}
//Mueve al índice anterior
function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
}
function updateSlider() {
    const offset = -currentIndex * 100;
    document.querySelector('.sliderContainer').style.transform = `translateX(${offset}%)`;
}
//Evento de los botones
document.querySelector('.next').addEventListener('click', showNextImage);
document.querySelector('.prev').addEventListener('click', showPrevImage);