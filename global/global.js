var mobileNav = new MobileNav();
var mobileConsole = new MobileConsole(document.getElementById('mobile-console'))

try{
    var menuSelector = new SelectElement(document.getElementById('menu-select'))
}catch(e){
    console.log('no selectors found')
}



