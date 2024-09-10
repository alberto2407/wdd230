const options = {
    year: "numeric"
};
document.querySelector("#yearDate").innerHTML = new Date().toLocaleDateString("en-US", options);

function formatLastModified(date) { //lo convierte a cadena, y asegura que tenga dos dígitos, añadiendo un cero al inicio si es necesario. 
    let day = date.getDate().toString().padStart(2, '0'); //Obtiene el mes de la fecha (0-11), le suma 1 para obtener el valor correcto (1-12), lo convierte a cadena y asegura que tenga dos dígitos. 
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear(); //Obtiene la hora de la fecha en formato de 24 horas 
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
} // Coloca la fecha de la última modificación, esta hora solo cambiará cuando el archivo HTML sea editado y guardado nuevamente en el servidor por el .lastModified 
let lastModified = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = formatLastModified(lastModified); //Alberto profesor FIN

//HAMBURGUER BUTTON//
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let darkBtn = document.querySelector('#darkBtn');
let main = document.querySelector('main');
darkBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
    const weekLinks = document.querySelectorAll('.Week a');
    weekLinks.forEach(link => {
        link.classList.toggle('dark');
    });
})

// Visits Counter
function updatePageVisitsCounter() {
    let numVisits = Number(window.localStorage.getItem("numVisitsCounter")) || 0;
    const visitsDisplay = document.querySelector(".visitors");

    if (numVisits === 0) {
        visitsDisplay.textContent = `Welcome! This is your first visit.`;
    } else {
        visitsDisplay.textContent = numVisits + 1;
    }

    localStorage.setItem("numVisitsCounter", numVisits);
}
updatePageVisitsCounter();