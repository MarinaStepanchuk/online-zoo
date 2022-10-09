//-----------burger-menu-----------------

const burgerButton = document.querySelector('.burger-menu'),
      burgerMenu = document.querySelector('.burger-menu-container'),
      backgroundDark = document.querySelector('.background-dark');

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

const scrollFeedback = document.querySelector('.feedback-scroll'),
      sliderFeedback = document.querySelector('.feedback-comment-container'),
      sliderItem = document.querySelector('.feedback-item');

let width = parseInt(sliderItem.offsetWidth, 10) + parseInt(window.getComputedStyle(sliderItem,null).getPropertyValue("margin-right"), 10);
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

window.addEventListener("resize", e => {
    width = parseInt(sliderItem.offsetWidth, 10) + parseInt(window.getComputedStyle(sliderItem,null).getPropertyValue("margin-right"), 10) + "px";
    scrollFeedback.max = (window.matchMedia('(max-width: 1000px)').matches) ? '8' : '7';
    sliderShift = '0px';
    scrollFeedback.value = 0;
    sliderFeedback.style.left = '0px'
    valPrew = scrollFeedback.value;
});

//------------feedback-slider increase feedback--------------

const feedbackContainer = document.querySelector('.feedback-comment-container'),
      feedbackIncreaseBlock = document.querySelector('.feedback-increase'),
      feedbackIncreaseContainer = document.querySelector('.feedback-increase-container'),
      feedbackCross = document.querySelector('.feedback-increase-cross'),
      feedbackBackground = document.querySelector('.feedback-increase');

let itemIncrease;

feedbackContainer.addEventListener('click', (event) => {
    if(event.target.offsetParent.classList.contains('feedback-item') && window.matchMedia('(max-width: 640px)').matches) {
        itemIncrease = event.target.offsetParent.cloneNode(true);
        feedbackIncreaseBlock.classList.add('show');
        feedbackIncreaseBlock.classList.add('show-index');
        feedbackIncreaseContainer.appendChild(itemIncrease);
        itemIncrease.classList.remove('feedback-item');
        itemIncrease.classList.add('feedback-increase-item');
    }
});

feedbackCross.addEventListener('click', () => {
    feedbackIncreaseBlock.classList.remove('show');
    setTimeout(function(){
        itemIncrease.remove();
        feedbackIncreaseBlock.classList.remove('show-index')
    }, 600);
});

feedbackBackground.addEventListener('click', (event) => {
    if(event.target.classList.contains('feedback-increase')) {
        feedbackIncreaseBlock.classList.remove('show');
        setTimeout(function(){
            itemIncrease.remove();
            feedbackIncreaseBlock.classList.remove('show-index')
        }, 600);
    };
});
