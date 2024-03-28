class Bar {
    constructor(element){
        this.controller = element.querySelector('.select-options')
        this.classicContainer = element.querySelector('.classic')
        this.premiumContainer = element.querySelector('.premium')
        this.start()
    }
    
    animation(){
        var classic = this.classicContainer.querySelector('span')
        var premium = this.premiumContainer.querySelector('span')

        classic.style.opacity = 0.5
        premium.style.opacity = 0.5

        setTimeout(() => {
            classic.style.opacity = 1
            premium.style.opacity = 1
        }, 500)
    }

    update(hour){
        if(hour == 2) {
            var msgClassic = '$35 PER PERSON'
            var msgPremium = '$65 PER PERSON'
            this.classicContainer.querySelector('span').innerHTML = msgClassic;
            this.premiumContainer.querySelector('span').innerHTML = msgPremium;
        }else {
            var msgClassic = '$50 PER PERSON'
            var msgPremium = '$80 PER PERSON'
            this.classicContainer.querySelector('span').innerHTML = msgClassic;
            this.premiumContainer.querySelector('span').innerHTML = msgPremium;
        }
        this.animation()
    }

    start(){
        this.controller.childNodes.forEach(option => {
            var hour = option.dataset.hour;
            option.addEventListener('click', () => this.update(hour))
        })
    }
}

var carruselElement = document.querySelector('.img-carrusel')
var carruselImgRoot = '/assets/reserve/carrusel'
var imgCarrusel = new Carrusel(carruselElement, 4, carruselImgRoot);
imgCarrusel.image.addEventListener('load', () => {
    imgCarrusel.wrapper.style.width = `${imgCarrusel.image.getBoundingClientRect().width}px`
})

var barElement = document.querySelector('#bar')

var barInfo = new Bar(barElement);