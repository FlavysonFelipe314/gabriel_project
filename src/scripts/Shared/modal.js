let openModal = document.getElementById("op-modal");
let closeModal = document.getElementById("close-modal");
let modal = document.querySelector("section.modal");

openModal.addEventListener("click", () => {
    modal.classList.add("open-modal");
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("open-modal");
})

