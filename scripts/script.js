// Html Elements Selection
const hamburgerElement = document.querySelector('#button');
const navElement = document.querySelector('.links');
const darkButton = document.querySelector('#dark-button');
const mainElement = document.querySelector('main');

// Menu Hamburguer
hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Dark Mode
darkButton.addEventListener('click', () => {
    mainElement.classList.toggle('dark');
});