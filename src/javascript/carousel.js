let index = 1;
const slides = document.querySelectorAll('#carousel-inner img');
function updateCarousel() {
    document.getElementById('carousel-inner').style.transform = `translateX(-${index * 100}%)`;
}
function prevSlide() {
    index = (index > 0) ? index - 1 : slides.length - 1;
    updateCarousel();
}
function nextSlide() {
    index = (index < slides.length - 1) ? index + 1 : 0;
    updateCarousel();
}