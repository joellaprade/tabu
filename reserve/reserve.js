var imgCarrusel = new Carrusel(document.querySelector('.img-carrusel'), 4, '/assets/reserve/carrusel');
imgCarrusel.image.addEventListener('load', () => {
    imgCarrusel.wrapper.style.width = `${imgCarrusel.image.getBoundingClientRect().width}px`
})