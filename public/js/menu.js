const header = document.querySelector("header")
const burgerBtn = document.querySelector("header button")

let openMenu = () => {
    header.classList.toggle("open")
}

burgerBtn.addEventListener("click", () => {
    openMenu()
})