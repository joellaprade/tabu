var mobileNav = new MobileNav();
var mobileConsole = new MobileConsole(document.getElementById('mobile-console'))

try{
    var menuSelector = new SelectElement(document.getElementById('menu-select'))
}catch(e){
    console.log('no selectors found')
}

try {
    var imgCarrusel = new Carrusel(document.querySelector('.img-carrusel'), 3);
    imgCarrusel.image.addEventListener('load', () => {
        imgCarrusel.wrapper.style.width = `${imgCarrusel.image.getBoundingClientRect().width}px`
    })
}catch(e){
    console.log('no carrusel found')
}

try {
    var slider = new Slider(document.querySelector('.slider'));
    slider.lastImg.addEventListener('load', () => {
        setTimeout(() => {
            slider.start();
        },5)  
    })
}catch(e){
    console.log('no slider found')
}


