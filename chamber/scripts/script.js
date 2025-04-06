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

//Last Modified
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
});

//----------------------------------------------------------------> Directory <------------------------------------------------------------------
// Number of Visits
if (typeof(Storage) !== "undefined") {

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

//----------------------------------------------------------------> Join <------------------------------------------------------------------

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {  
    event.preventDefault();
    window.location.href = 'join.html';
});

document.getElementById("timestamp").value = new Date().toISOString()