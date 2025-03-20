// Html Elements Selection
const hamburgerElement = document.querySelector('#button');
const navElement = document.querySelector('.links');
const logoElement = document.querySelector('.logo');

// Menu Hamburguer
hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
    logoElement.classList.toggle('svg-logo');
});