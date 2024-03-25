class MobileConsole {
    constructor(element){
        this.element = element;
    }

    log(message){
        this.element.innerText = message;
    }
}

var mobileConsole = new MobileConsole(document.getElementById('mobile-console'))

mobileConsole.log(document.querySelector('.light-arrow').childNodes[0])







class selectElement {
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
            console.log('e')
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

var menuSelector = new selectElement(document.getElementById('menu-select'))