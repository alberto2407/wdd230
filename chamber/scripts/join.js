/* *********************************************************************************************************************
                                                    Join
********************************************************************************************************************* */

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = 'join.html';
});

document.getElementById("timestamp").value = new Date().toISOString();