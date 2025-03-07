import inputValidation from "../Utils/inputValidation.js";

let nameInput = document.getElementById("name");
let mmInput = document.getElementById("message-model");
let daysInput = document.getElementById("days");
let form = document.getElementById("form-modal");


form.addEventListener("submit", (e) => {
    let name = nameInput.value;
    let model = mmInput.value;
    let days = daysInput.value;

    inputValidation(name, nameInput, e);
    inputValidation(model, mmInput, e);
    inputValidation(days, daysInput, e);
})