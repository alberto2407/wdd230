const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("#button");
let chaptersArray = getChapterList() || [];


document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});

// Añadido 
function capitalizeWords(str) { // \b: Encuentra un límite de palabra (el punto donde una palabra comienza o termina). 
    // \w: Coincide con cualquier carácter alfanumérico (es decir, cualquier letra o número). 
    // \g: El modificador de búsqueda global para encontrar todas las coincidencias en la cadena. 
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
// Añadido

function displayList(item) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    if (listItem.textContent !== "") {
        list.append(listItem);
        listItem.append(deleteButton);
    } else {
        input.value = "";
        input.focus();
        return;
    }
    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });

    input.focus();
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(capitalizeWords(input.value.trim()));
        chaptersArray.push(input.value.trim());
        setChapterList();
        input.value = "";
        input.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});