function check () {

    if(window.innerWidth > 640) {
        document.querySelector('.default640').removeAttribute('checked');
        document.querySelector('.default1000').setAttribute('checked', 'checked');
    } else  {
        document.querySelector('.default1000').removeAttribute('checked');
        document.querySelector('.default640').setAttribute('checked', 'checked');
    }
}

window.addEventListener('resize', check)
check()