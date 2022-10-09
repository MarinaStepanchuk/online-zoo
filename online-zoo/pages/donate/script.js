// function check () {

//     if(window.innerWidth > 640) {
//         document.querySelector('.default640').removeAttribute('checked');
//         document.querySelector('.default1000').setAttribute('checked', 'checked');
//     } else  {
//         document.querySelector('.default1000').removeAttribute('checked');
//         document.querySelector('.default640').setAttribute('checked', 'checked');
//     }
// }

// window.addEventListener('resize', check)
// check()

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
})

backgroundDark.addEventListener('click', () => {
    burgerMenu.classList.remove('menu-open');
    burgerButton.classList.remove('menu-open');
    backgroundDark.classList.remove('background-active');
})

//---------------donate-------------

const inputDonation = document.querySelector('.input-amount')

inputDonation.addEventListener('input', () => {
    if(inputDonation.value.length > 4) {
        inputDonation.value = inputDonation.value.substr(0, 4)
    }
})