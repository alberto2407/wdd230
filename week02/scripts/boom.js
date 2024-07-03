const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("#button");


// Añadido 
function capitalizeWords(str) { // \b: Encuentra un límite de palabra (el punto donde una palabra comienza o termina). 
    // \w: Coincide con cualquier carácter alfanumérico (es decir, cualquier letra o número). 
    // \g: El modificador de búsqueda global para encontrar todas las coincidencias en la cadena. 
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
// Añadido

button.addEventListener("click", () => {
    if (input.value != "") {
        let listItem = document.createElement("li");
        //call function to capitalize first letter of input value
        listItem.textContent = capitalizeWords(input.value.trim());

        const userInfo = listItem.textContent.split(" ");
        // Split the input value into an array of words and join them back together with a space
        const bookTitle = userInfo.slice(0, -1).join(" ");
        // Convert the chapter number to an integer from the last element of the array
        const chapterNumber = parseInt(userInfo[userInfo.length - 1]);
        // console.log(bookTitle, chapterNumber);

        if (listItem.textContent !== "") {
            // create delete button to append to list item
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            listItem.append(deleteButton);

            list.append(listItem);
            input.value = "";
            input.focus();

            deleteButton.addEventListener("click", () => {
                list.removeChild(listItem);
                input.focus();
            });
        } else {
            input.value = "";
            input.focus();
            return;
        }
    } else {
        alert("You must enter a book name and chapter number");
        input.focus();
        return;
    }
});