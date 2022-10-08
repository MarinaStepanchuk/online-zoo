//-----------burger-menu-----------------

const burgerButton = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.burger-menu-container');
const backgroundDark = document.querySelector('.background-dark');

burgerButton.addEventListener('click', () => {
    if(burgerButton.classList.contains('menu-open')) {
        burgerMenu.classList.remove('menu-open');
        burgerButton.classList.remove('menu-open');
        backgroundDark.classList.remove('background-active');
    } else {
        burgerMenu.classList.add('menu-open');
        burgerButton.classList.add('menu-open');
        backgroundDark.classList.add('background-active');
    }
});

backgroundDark.addEventListener('click', () => {
    burgerMenu.classList.remove('menu-open');
    burgerButton.classList.remove('menu-open');
    backgroundDark.classList.remove('background-active');
});

//------------feedback-slider--------------

const scrollFeedback = document.querySelector('.feedback-scroll');
const sliderFeedback = document.querySelector('.feedback-comment-container');
const sliderItem = document.querySelector('.feedback-item');

let width = parseInt(sliderItem.offsetWidth, 10) + parseInt(window.getComputedStyle(sliderItem,null).getPropertyValue("margin-right"), 10);

window.addEventListener("resize", e => {
    width = parseInt(sliderItem.offsetWidth, 10) + parseInt(window.getComputedStyle(sliderItem,null).getPropertyValue("margin-right"), 10) + "px";
    scrollFeedback.max = (window.matchMedia('(max-width: 1000px)').matches) ? '8' : '7';
});

let valPrew = scrollFeedback.value;
let sliderShift = '0px';

scrollFeedback.max = (window.matchMedia('(max-width: 1000px)').matches) ? '8' : '7';

scrollFeedback. addEventListener('input', () => {
    let val = scrollFeedback.value;
    if(val > valPrew) {
        sliderFeedback.style.left = parseInt(sliderShift, 10) - parseInt(width, 10) + "px";
    } else {
        sliderFeedback.style.left = parseInt(sliderShift, 10) + parseInt(width, 10) + "px";
    }
    sliderShift = sliderFeedback.style.left;
    valPrew = val;
})
