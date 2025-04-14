document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
});

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.7500&lon=6.6377&units=metric&appid=b2984989fe82c707acfff9901290d3e6";
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
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');


    const formatedTemp = data.main.temp.toFixed(0);
    currentTemp.innerHTML = `<strong>${formatedTemp} &deg;C </strong>`;

    data.weather.forEach((weatherEvent) => {
        const iconSrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
        const iconDesc = weatherEvent.description;
        weatherIcon.setAttribute('src', iconSrc);
        weatherIcon.setAttribute('alt', iconDesc);
        captionDesc.innerHTML = `${iconDesc}`;;
    });
}

function capitalize(string) {
    const words = string.split(' ');

    return words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
