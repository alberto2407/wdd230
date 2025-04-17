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

// Weather API
const apiKey = 'b2984989fe82c707acfff9901290d3e6';

const lon = 2.1577170382054245;
const lat = 41.396449253937064;
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(URL);
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

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

fetch(forecastUrl)
  .then(res => res.json())
  .then(data => {
    let forecastContainer = document.querySelector('#forecast');
    let daysDisplayed = 0;

    for (let i = 0; i < data.list.length && daysDisplayed < 3; i++) {
      let forecast = data.list[i];
      // Check if forecast is around 12:00 PM
      if (forecast.dt_txt.includes("12:00:00")) {
        const date = new Date(forecast.dt_txt);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = forecast.main.temp.toFixed(1);

        forecastContainer.innerHTML += `
          <p>
            <strong>${day}</strong>: ${temp}&deg;C
          </p>
        `;
        daysDisplayed++;
      }
    }
  });


// Banner
const banner = document.getElementById('banner');
const closeBtn = document.getElementById('closeBtn');

const current_date = new Date();
const dayOfWeek = current_date.getDay();
if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    banner.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});
      
//Last Modified
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  const currentYearElement = document.getElementById('currentYear');
  const lastModifiedElement = document.getElementById('lastModified');
  currentYearElement.textContent = currentYear;
  lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
});

/* *********************************************************************************************************************
                                                      Discovery
********************************************************************************************************************* */
// Number of Visits
if (typeof (Storage) !== "undefined") {

  var lastVisit = localStorage.getItem("lastVisit");

  var currentDate = new Date().getTime();

  if (!lastVisit) {
    document.getElementById("message").textContent = "Welcome to the Cambra de Comerç de Barcelona! Let us know if you have any questions.";
  } else {
    var timeDiff = currentDate - parseInt(lastVisit);
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
      document.getElementById("message").textContent = "Back so soon! Awesome!";
    }
    else {
      var message = "You last visited " + daysDiff + " ";
      message += (daysDiff === 1) ? "day" : "days";
      message += " ago.";
      document.getElementById("message").textContent = message;
    }
  }
  localStorage.setItem("lastVisit", currentDate);
} else {
  document.getElementById("message").textContent = "LocalStorage is not supported in your browser.";
}

/* *********************************************************************************************************************
                                                    Join
********************************************************************************************************************* */

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = 'join.html';
});

document.getElementById("timestamp").value = new Date().toISOString();