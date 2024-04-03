let gridBtn = document.querySelector("button.grid")
let listBtn = document.querySelector("button.list")
let pictures = document.querySelector(".pictures")

let changeView = (btn) => {
    if (btn.classList.value !== "grid") {
        pictures.classList.add("list")
    } else {
        pictures.classList.remove("list")
    }
}

if (gridBtn !== null && listBtn !== null) {
    gridBtn.addEventListener("click", (e) => {
        changeView(e.currentTarget)
    })

    listBtn.addEventListener("click", (e) => {
        changeView(e.currentTarget)
    })
}