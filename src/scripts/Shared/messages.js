import inputValidation from "../Utils/inputValidation.js";

let nameInput = document.getElementById("name");
let contentInput = document.getElementById("content");
let form = document.getElementById("form-modal");


form.addEventListener("submit", (e) => {
    let name = nameInput.value;
    let content = contentInput.value;

    inputValidation(name, nameInput, e);
    inputValidation(content, contentInput, e)
})