let input = document.querySelector("input#nb")

let getInputValue = () => {
    value = input.value !== "" && !isNaN(input.value) ? parseInt(input.value) : null

    if (isError(value)) {
        pokemonIDs = []
        pokemonIDs[0] = value
        input.value = ""
        getDatas(true)

        if (galleryContainer !== null) showForm()
    }
}