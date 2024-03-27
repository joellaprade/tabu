class SelectElement {
    constructor(element){
        this.header = element.querySelector('.select-element').querySelector('span');
        this.options = element.querySelector('.select-options').querySelectorAll('span')
        this.initialize(element);
    }

    rotateArrow(element, deg){
        element.querySelector('.select-element').querySelector('svg').style.rotate = deg+'deg';
    }

    toggleOptions(element){
        var elDisplay = element.querySelector('.select-options').style.display
        if(elDisplay != 'flex'){
            this.rotateArrow(element, 180)
            element.querySelector('.select-options').style.display = 'flex'
        }else {
            this.rotateArrow(element, 0)
            element.querySelector('.select-options').style.display = 'none'
        }
    }

    selectOption(element){
        this.header.innerText = element.innerText;
    }

    initialize(element){
        this.selectOption(this.options[0])
        element.addEventListener('click', () => {
            this.toggleOptions(element);
        })
        this.options.forEach(option => {
            option.addEventListener('click', () => {
                this.selectOption(option)
            })
        })
    }
}

class MobileConsole {
    constructor(element){
        this.element = element;
    }

    log(message){
        this.element.innerText = message;
    }
}

class MobileNav {
    constructor(){
        this.nav = document.querySelector('.mobile-nav');
        this.openButton = document.querySelector('.hamburguer')
        this.closeButton = document.querySelector('.x');
        this.mobileContactButton = document.querySelector('.mobile-nav .link-button')
        this.hidden = true;
        this.events(this.nav);
    }

    toggle(){
        if(this.hidden){
            this.nav.style.translate = '-66vw 0';
            document.body.style.height = '100vh'
            document.body.style.overflowY = 'clip'
            this.hidden = false;
        }else {
            this.nav.style.translate = '0 0';
            document.body.style.height = 'auto'
            document.body.style.overflowY = 'auto'
            this.hidden = true;
        }
    }mobileContactButton

    events(){
        this.openButton.addEventListener('click', () => {
            this.toggle()
        })
        this.closeButton.addEventListener('click', () => {
            this.toggle()
        })
        this.mobileContactButton.addEventListener('click', () => {
            this.toggle()
        })
    }
}

var test = document.querySelector('.container-1 .wrapper');
class Carrusel {
    constructor(element, size){
        this.carrusel = element;
        this.size = size - 1;
        this.image = this.carrusel.querySelector('img');
        this.wrapper = document.querySelector('div.wrapper.img-carrusel')
        this.leftButton = document.querySelectorAll('.arrow')[0]
        this.rightButton = document.querySelectorAll('.arrow')[1]
        this.index = 0;
        this.events();
    }

    moveLeft(){
        this.index--;
        if(this.index < 0) {
            this.index = this.size;
        }
        this.image.src = `/assets/index/carrusel/${this.index}.png`;
    }

    moveRight(){
        this.index++;
        if(this.index > this.size){
            this.index = 0
        }
        this.image.src = `/assets/index/carrusel/${this.index}.png`;
    }

    events(){
        this.image.src = `/assets/index/carrusel/0.png`
        this.leftButton.addEventListener('click', () => this.moveLeft())
        this.rightButton.addEventListener('click', () => this.moveRight())
    }
}

var index = 0

class Slider {
    constructor(element){
        this.element = element
        this.size = 9
        this.rendered = 0;
        this.firstImg;
        this.lastImg;

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
            this.element.innerHTML += `<img src="/assets/index/slider/slider-img-${i}.png" alt="">`
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

    start(){
        this.center()
        this.startObserver.observe(this.firstImg)
        this.endObserver.observe(this.lastImg)
    }
}