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

// Weather API
const apiKey = 'b2984989fe82c707acfff9901290d3e6';
const log = 2.0754219116414285;
const lat = 41.56405087710395;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    const currentTemp = document.querySelector('#weather');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');


    const formatedTemp = data.main.temp.toFixed(0);
    currentTemp.innerHTML = `${formatedTemp} &deg;C`;

    data.weather.forEach((weatherEvent) => {
        const iconSrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
        const iconDesc = weatherEvent.description;
        const capitalizedDesc = capitalize(iconDesc);
        weatherIcon.setAttribute('src', iconSrc);
        weatherIcon.setAttribute('alt', iconDesc);
        weatherIcon.setAttribute('loading', 'lazy');
        captionDesc.innerHTML = `${capitalizedDesc}`;;
    });
}

function capitalize(string) {
    const words = string.split(' ');

    return words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
}