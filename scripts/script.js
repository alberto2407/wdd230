// Html Elements Selection
const hamburgerElement = document.querySelector('#button');
const navElement = document.querySelector('.links');
const darkButton = document.querySelector('#dark-button');
const mainElement = document.querySelector('main');
const visitsDisplay = document.getElementById('visits');

//Last Modified
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
});

// Menu Hamburguer
hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Dark Mode
darkButton.addEventListener('click', () => {
    mainElement.classList.toggle('dark');
});

// Number of Visits
let numVisits = Number(window.localStorage.getItem('numVisits-ls'));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem('numVisits-ls', numVisits);