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

class Carrusel {
    constructor(element, size, root){
        this.carrusel = element;
        this.root = root
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
        this.image.src = `${this.root}/${this.index}.png`;
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


