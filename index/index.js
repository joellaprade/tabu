class Slider {
    constructor(element){
        this.element = element
        this.size = 9
        this.rendered = 0;
        this.firstImg;
        this.lastImg;
        this.leftBtn = element.parentElement.childNodes[1]
        this.rightBtn = element.parentElement.childNodes[5]

        this.startObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting)this.insertStart()
            })}, {threshold: 1})

        this.endObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting)this.insertEnd()
            })}, {threshold: 1})

        this.populate()
    }

    populate(){
        for(var i = 0; i < this.size; i++){
            this.element.innerHTML += `<img src="/assets/index/slider/slider-img-${i}.png">`
        }
        this.rendered += this.size;
        this.firstImg = this.element.childNodes[0];
        this.lastImg = this.element.childNodes[this.size - 1]
    }

    center(){
        var visibleWidth = Number(window.getComputedStyle(this.element).width.slice(0, 4))
            if(isNaN(visibleWidth)) visibleWidth = Number(window.getComputedStyle(this.element).width.slice(0, 3))
        var totalWidth = this.element.scrollWidth
        var shift = (totalWidth - visibleWidth) / 2 
        this.element.scrollLeft += shift
    }

    insertStart() {
        this.element.style.scrollBehavior = "auto"
        var margin = Number(window.getComputedStyle(this.lastImg).marginLeft.slice(0,2))
        var width = Number(window.getComputedStyle(this.lastImg).width.slice(0,3))
        var shift = (margin * 2 + width) * 9;

        for(var i = this.size - 1; i >= 0; i--){
            var newElement = document.createElement('img');
            var refElement = this.element.childNodes[0]
            newElement.src = `/assets/index/slider/slider-img-${i}.png`;
            this.element.insertBefore(newElement, refElement)
        }

        this.rendered += this.size;
        this.element.scrollLeft += shift
        this.startObserver.unobserve(this.firstImg)
        this.firstImg = this.element.childNodes[0]
        this.startObserver.observe(this.firstImg)
        this.element.style.scrollBehavior = "smooth"
    }

    insertEnd() {
        for(var i = 0; i < this.size - 1; i++){
            var newElement = document.createElement('img');
            newElement.src = `/assets/index/slider/slider-img-${i}.png`;
            this.element.appendChild(newElement)
        }

        this.rendered += this.size - 1;
        this.endObserver.unobserve(this.lastImg)
        this.lastImg = this.element.childNodes[this.rendered - 1]
        this.endObserver.observe(this.lastImg)
    }

    slideLeft(){
        var shift = Number(window.getComputedStyle(document.body).width.slice(0,4))
        if(isNaN(shift)) shift = Number(window.getComputedStyle(document.body).width.slice(0,3))
        this.element.scrollLeft -= shift
    }

    slideRight(){
        var shift = Number(window.getComputedStyle(document.body).width.slice(0,4))
        if(isNaN(shift)) shift = Number(window.getComputedStyle(document.body).width.slice(0,3))
        this.element.scrollLeft += shift
    }

    start(){
        this.center()
        this.startObserver.observe(this.firstImg)
        this.endObserver.observe(this.lastImg)
        this.leftBtn.addEventListener('click', () => this.slideLeft())
        this.rightBtn.addEventListener('click', () => this.slideRight())
        this.element.style.scrollBehavior = "smooth"

    }
}

var slider = new Slider(document.querySelector('.slider'));
slider.lastImg.addEventListener('load', () => {
    setTimeout(() => {
        slider.start();
    },10)  
})


var imgCarrusel = new Carrusel(document.querySelector('.img-carrusel'), 4, '/assets/index/carrusel');
imgCarrusel.image.addEventListener('load', () => {
    imgCarrusel.wrapper.style.width = `${imgCarrusel.image.getBoundingClientRect().width}px`
})