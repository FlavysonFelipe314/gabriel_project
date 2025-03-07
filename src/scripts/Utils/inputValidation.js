function inputValidation(value, inputValue, error){
    if(!value){
        inputValue.style.border = "1px solid red"
        inputValue.style.backgroundColor = "#5035355a"
        
        inputValue.addEventListener("click", () => {
            inputValue.style.border = "none"
            inputValue.style.backgroundColor = "#353e50"
        })
        
        error.preventDefault()
    }
}

export default inputValidation