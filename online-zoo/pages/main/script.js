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
      slide = document.querySelector('.feedback-item');

let width = parseInt(slide.offsetWidth, 10) + parseInt(window.getComputedStyle(slide,null).getPropertyValue("margin-right"), 10);
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
    width = parseInt(slide.offsetWidth, 10) + parseInt(window.getComputedStyle(slide,null).getPropertyValue("margin-right"), 10) + "px";
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
    } else if(event.target.className === 'feedback-item' && window.matchMedia('(max-width: 640px)').matches) {
        itemIncrease = event.target.cloneNode(true);
        feedbackIncreaseBlock.classList.add('show');
        feedbackIncreaseBlock.classList.add('show-index');
        feedbackIncreaseContainer.appendChild(itemIncrease);
        itemIncrease.classList.remove('feedback-item');
        itemIncrease.classList.add('feedback-increase-item');
    };
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

//--------------animals carousel-------------------

const animals = [
    {
        'id': '1',
        'img': '../../assets/images/main/gallery-panda.jpg',
        'name': 'giant Pandas',
        'local': 'Native to Southwest China',
        'icon': '../../assets/icons/banana-bamboo_icon.png',
        'altIcon': 'banana and bamboo',
        'type': 'vegan',
    },
    {
        'id': '2',
        'img': '../../assets/images/main/gallery-eagles.jpg',
        'name': 'Eagles',
        'local': 'Native to South America',
        'icon': '../../assets/icons/meet-fish_icon.png',
        'altIcon': 'meet and fish',
        'type': 'meet',
    },
    {
        'id': '3',
        'img': '../../assets/images/main/gallery-gorillas.jpg',
        'name': 'Gorillas',
        'local': 'Native to Congo',
        'icon': '../../assets/icons/banana-bamboo_icon.png',
        'altIcon': 'banana and bamboo',
        'type': 'vegan',
    },
    {
        'id': '4',
        'img': '../../assets/images/main/gallery-sloth.jpg',
        'name': 'Two-toed Sloth',
        'local': 'Mesoamerica, South America',
        'icon': '../../assets/icons/banana-bamboo_icon.png',
        'altIcon': 'banana and bamboo',
        'type': 'vegan',
    },
    {
        'id': '5',
        'img': '../../assets/images/main/gallery-cheerahs.jpg',
        'name': 'cheetahs',
        'local': 'Native to Africa',
        'icon': '../../assets/icons/meet-fish_icon.png',
        'altIcon': 'meet and fish',
        'type': 'meet',
    },
    {
        'id': '6',
        'img': '../../assets/images/main/gallery-penguins.jpg',
        'name': 'Penguins',
        'local': 'Native to Antarctica',
        'icon': '../../assets/icons/meet-fish_icon.png',
        'altIcon': 'meet and fish',
        'type': 'meet',
    },
    {
        'id': '7',
        'img': '../../assets/images/main/gallery-alligators.jpg',
        'name': 'Alligators',
        'local': 'Native to Southeastern U. S.',
        'icon': '../../assets/icons/meet-fish_icon.png',
        'altIcon': 'meet and fish',
        'type': 'meet',
    },
    {
        'id': '8',
        'img': '../../assets/images/main/gallery-gorillas2.jpg',
        'name': 'Gorillas',
        'local': 'Native to Congo',
        'icon': '../../assets/icons/banana-bamboo_icon.png',
        'altIcon': 'banana and bamboo',
        'type': 'vegan',
    }
]

const galery = document.querySelector('.gallery-wrapper');
let countCards = (window.matchMedia('(max-width: 640px)').matches) ? 4 : 6;

//-------рандомно выбираем набор карточек-----------

let getMixCards = (cards) => {
    let set = [];
    while(set.length < countCards) {
        let item = cards[Math.floor(Math.random()*cards.length)];
        if(!set.includes(item)) {
            set.push(item);
        };
    };
    return set
};

//-----------------генерируем галерею-------------------

let createSet = (set) => {
    let cards = getMixCards(set);
    let gallery = document.createElement('div');
    // gallery.classList.add('gallery');
    for(let i = 0; i < cards.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<div class="temp">
                                <img class="card-animal" src="${cards[i].img}"></img>
                                <div class="card-background"></div>
                                <div class="ascent-text">
                                    <p class="signature-text-title text-show">${cards[i].name}</p>
                                    <span class="signature-text text-show">${cards[i].local}</span>
                                </div>
                            </div>
                            <div class="card-signature">
                                <div class="signature">
                                    <p class="signature-text-title">${cards[i].name}</p>
                                    <span class="signature-text">${cards[i].local}</span>
                                </div>
                                <img class="${cards[i].type}" src="${cards[i].icon}" alt="${cards[i].altIcon}">
                            </div>`;
        gallery.appendChild(card);
    } 
    return gallery;
}

//--------------вставляем в галерею наборы-------------

const leftCards = document.querySelector('.cards-left');
const visibleCards = document.querySelector('.cards-visible');
const rightCards = document.querySelector('.cards-rigth');
leftCards.innerHTML = createSet(animals).innerHTML;
rightCards.innerHTML =  createSet(animals).innerHTML;
visibleCards.innerHTML =  createSet(animals).innerHTML;


const prewSlide = document.querySelector('.arrow-left');
const nextSlide = document.querySelector('.arrow-right');
const cardGallery = document.querySelector('.gallery');

galery.style.left = 0;

prewSlide.addEventListener('click', (e) => {
    galery.style.left = parseInt(galery.style.left, 10) + parseInt(cardGallery.offsetWidth, 10) + 30 + 'px';
})

galery.addEventListener('transitionend', () => {
            galery.style.transition = "all 0s"
            galery.style.left = 0;
            rightCards.innerHTML = visibleCards.innerHTML;
            visibleCards.innerHTML = leftCards.innerHTML;
            leftCards.innerHTML = createSet(animals).innerHTML;
            // galery.style.transition = "all 1s"
    // rightCards.remove();
    // rightCards.innerHTML =  createSet(animals).innerHTML;
    // galery.insertBefore(rightCards,leftCards)
    if(galery.style.left > 0) {

        // galery.style.transition = "all 0s"
        galery.style.left = 0;
        rightCards.innerHTML = visibleCards.innerHTML;
        visibleCards.innerHTML = leftCards.innerHTML;
        leftCards.innerHTML = createSet(animals).innerHTML;
    }
    // galery.style.transition = "all 1s"
})

nextSlide.addEventListener('click', (e) => {
    galery.style.left = parseInt(galery.style.left, 10) - parseInt(cardGallery.offsetWidth, 10) - 30 + 'px';
    leftCards.innerHTML = visibleCards.innerHTML;
})

//---------------отслеживаем изменение размеров экрана------------

window.addEventListener("resize", (e) => {
    // galery.innerHTML = '';
    galery.style.left = 0;
    countCards = (window.matchMedia('(max-width: 640px)').matches) ? 4 : 6;
    // leftCards = createSet(animals);
    // rightCards = createSet(animals);
    // visibleCards = createSet(animals);
    // galery.appendChild(leftCards)
    // galery.appendChild(visibleCards)
    // galery.appendChild(rightCards)
});

