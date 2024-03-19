class selectElement {
    constructor(element){
        this.header = element.querySelector('.select-element').querySelector('span');
        this.options = element.querySelector('.select-options').querySelectorAll('span')
        this.setListeners(element);
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

    setListeners(element){
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