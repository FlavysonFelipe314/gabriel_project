import inputValidation from "../Utils/inputValidation.js";

let tokenInput = document.getElementById("token");
let form = document.getElementById("form-login");

form.addEventListener("submit", (e) => {
    let token = tokenInput.value;

    inputValidation(token, tokenInput, e)
})