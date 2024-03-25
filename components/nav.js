document.querySelector('nav').innerHTML += 
`<a class="logo-container" href="/">
    <img class="logo" src="../assets/logo.png" alt="">
</a>

<div class="links-container">
    <a href="/">Home</a>
    <a href="/menu">Menu</a>
    <a href="/reserve">Reserve Venue</a>
    <a class="link-button" href="#footer">Contact</a>
    <svg class="hamburguer">
        <use href="/assets/Hamburguer.svg#hamburguer"></use>
    </svg>
</div>
<div class="mobile-nav">
                <svg class="x">
                    <use href="../assets/x.svg#x"></use>
                </svg>
                <div class="mobile-links-container">
                    <a href="/">Home</a>
                    <a href="/menu">Menu</a>
                    <a href="/reserve">Reserve Venue</a>
                    <a class="link-button" href="#footer">Contact</a>
                </div>
            </div>
`