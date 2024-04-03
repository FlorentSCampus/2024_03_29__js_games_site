let inputForm = document.querySelector(".feed__container form input")
let buttonForm = document.querySelector(".feed__container form button")

getValue = () => {
    value = parseInt(inputForm.value)

    if (inputForm.value !== "" && typeof (value) === "number") {
        idList = []
        idList[0] = value
        inputForm.value = ""
        getApiData(true)
    }
}

buttonForm.addEventListener("click", () => {
    getValue()
})