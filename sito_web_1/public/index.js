const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle('menu-open');
})

ScrollReveal().reveal('.reveal', {distance: '50px', duration: 1500, easing: 'cubic-bezier(.215, .61, .355, 1)', interval:500 });

ScrollReveal().reveal('.zoom', {mobile: false, scale: 0.65, duration:1500, interval:200 });


