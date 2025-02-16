const header = document.querySelector("header");
window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 80);

});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('#menu-icon');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll =() => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const ScrollReveal = require('scrollreveal')({
    origin:'top',
    distance: '85px',
    duration: 2500,
    reset:true
})

ScrollReveal.reveal ('.home-text',{delay:300});
ScrollReveal.reveal ('.home-img',{delay:400});
ScrollReveal.reveal ('.container',{delay:400});
