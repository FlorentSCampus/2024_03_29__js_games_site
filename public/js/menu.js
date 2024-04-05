const header = document.querySelector("header")
const burgerBtn = document.querySelector("header button")

let openMenu = (button) => {
    header.classList.toggle("open")
}

burgerBtn.addEventListener("click", (e) => {
    openMenu(e.currentTarget)
})