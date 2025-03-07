let openTrigger = document.getElementById("open-trigger");
let closeTrigger = document.getElementById("close-trigger");
let content = document.querySelector(".content-menu");

openTrigger.addEventListener("click", () => {
    content.classList.add("expand-menu");
})

closeTrigger.addEventListener("click", () => {
    content.classList.remove("expand-menu");
})