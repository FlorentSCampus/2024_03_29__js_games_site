const header = document.querySelector("header")
const button = document.querySelector("header button")

let openMenu = (button) => {
    header.classList.toggle("open")
}

button.addEventListener("click", (e) => {
    openMenu(e.currentTarget)
})