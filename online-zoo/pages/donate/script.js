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
    };
});

backgroundDark.addEventListener('click', () => {
    burgerMenu.classList.remove('menu-open');
    burgerButton.classList.remove('menu-open');
    backgroundDark.classList.remove('background-active');
});

//---------------donate-------------

const inputDonation = document.querySelector('.input-amount'),
      choiceDonationContainer = document.querySelector('.donate-radio-container'),
      choiseDonations = document.querySelectorAll('.amount-item-radio'),
      defaultDonate = document.querySelector('.default');

inputDonation.onkeypress = function(event) {
    return event.charCode >= 48 && event.charCode <= 57
};

defaultDonate.setAttribute('checked', 'checked');

inputDonation.addEventListener('input', () => {
    if(inputDonation.value.length > 4) {
        inputDonation.value = inputDonation.value.substr(0, 4)
    }
    for(let i = 0; i < choiseDonations.length; i++) {
        choiseDonations[i].removeAttribute('checked')
    }
    for (let i = 0; i < choiseDonations.length; i++) {
        if(inputDonation.value === choiseDonations[i].value) {
            choiseDonations[i].setAttribute('checked', 'checked');
        } else {
            choiseDonations[i].removeAttribute('checked');
        };
    };
})

choiceDonationContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('amount-item-radio')) {
        inputDonation.value = e.target.value;
    };
});