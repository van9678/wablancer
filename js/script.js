const burger = document.querySelector('.header__burger');
const menuOpen = document.querySelector('.header__navigation');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    menuOpen.classList.toggle('open');
});