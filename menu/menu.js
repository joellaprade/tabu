var data = [
    [
        {title: 'breakfast 1', price: 12, icons: ['spicy'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        {title: 'breakfast 2', price: 20, icons: ['veggie', 'spicy'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        {title: 'breakfast 3', price: 9, icons: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        {title: 'breakfast 4', price: 5, icons: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        {title: 'breakfast 3', price: 9, icons: ['special'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    ],
    [
        {title: 'appetizer 1', price: 20, icons: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        {title: 'appetizer 2', price: 9, icons: ['special'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        {title: 'appetizer 3', price: 5, icons: ['spicy'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        {title: 'appetizer 4', price: 9, icons: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        {title: 'appetizer 3', price: 12, icons: ['veggie'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    ],
    [
        {title: 'mixology 1', price: 20, icons: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    ],
    [
        {title: 'main dish 1', price: 20, icons: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    ],
    [
        {title: 'dessert 1', price: 20, icons: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    ],
    [
        {title: 'drink 1', price: 20, icons: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
    ]
]
class Menu {
    constructor(){
        this.container = document.querySelector('.dishes');
        this.pcControlBtns = document.querySelectorAll('.menu-nav > span')
        this.mobileControlBtns = document.querySelectorAll('#menu-select .select-options span')
        this.start();
    }

    selected(index){
        this.pcControlBtns.forEach(btn => {
            btn.classList.remove('selected')
        })
        this.pcControlBtns[index].classList.add('selected')
    }

    hasSvg(element){
        var node = "";
        console.log(node)
        if(element.icons.size != 0){
            element.icons.forEach(icon => {
                node += 
                `<svg class="${icon}">
                    <use href="../assets/menu/${icon}.svg#${icon}"></use>
                </svg>`
            })
        }
        return node;
    }

    populate(container, data){
        container.innerHTML = '';
        data.forEach(element => {
            var element = 
                        `<div class="container">
                            <div>
                                <h2>${element.title} $${element.price}</h2>
                                ${this.hasSvg(element)}
                            </div>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vitae!</span>
                        </div>`
            container.innerHTML += element;
        })
    }

    start(){

        this.populate(this.container, data[0])
        this.selected(0)
        this.pcControlBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                var index = btn.dataset.index
                this.selected(index)
                this.populate(this.container, data[index])
            })
        })
        this.mobileControlBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                var index = btn.dataset.index
                this.populate(this.container, data[index])
            })
        })
    }
}

var menu = new Menu();