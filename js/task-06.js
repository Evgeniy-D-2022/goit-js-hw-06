
    const textInput = document.querySelector("#validation-input");
   

textInput.addEventListener("blur", () => {
    
    if (textInput.value.length < textInput.dataset.length ||
textInput.value.length > textInput.dataset.length) {
        textInput.classList.add("invalid");
    }
    else {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    }
});