let error = document.querySelector("form p")

let isError = (value) => {
    error.innerText = ""
    
    if (value !== "" && typeof(value) === "number") {
        if (value > pokemonSpecies) {
            error.innerText = "Please enter a number between 1 and " + pokemonSpecies
        } else {
            error.classList.remove("visible")
            return true
        }
    } else {
        error.innerText = "Please enter a number"
    }

    error.classList.add("visible")
}