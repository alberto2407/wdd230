const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("#button");

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

button.addEventListener("click", () => {
    if (input.value != "") {
        let listItem = document.createElement("li");
        listItem.textContent = capitalizeWords(input.value.trim());

        const userInfo = listItem.textContent.split(" ");
        const bookTitle = userInfo.slice(0, -1).join(" ");
        const chapterNumber = parseInt(userInfo[userInfo.length - 1]);

        if (listItem.textContent !== "") {
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
        }
        else {
            input.value = "";
            input.focus();
            return;
        }
    }
    else {
        alert("You must to enter a book name and chapter number");
        input.focus();
        return;
    }
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        button.click();
    }
});