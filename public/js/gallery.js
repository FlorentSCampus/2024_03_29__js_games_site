let gridBtn = document.querySelector("button.grid")
let listBtn = document.querySelector("button.list")
let addBtn = document.querySelector("button.add")

let setPicture = (data, insertBefore) => {
    item = document.createElement("div")
    img = document.createElement("img")

    item.classList.add("item")
    img.src = data.img
    img.alt = "Sprite de " + data.name

    if (!insertBefore) {
        galleryContainer.children[2].appendChild(item).append(img)
    } else {
        firstItem = galleryContainer.querySelector(".item")
        galleryContainer.children[2].insertBefore(item, firstItem)
        item.append(img)
    }

    setDeleteBtn(item)
    deleteItem(item)
}

let addPicture = () => {
    pokemonIDs = []
    pokemonIDs[0] = (Math.floor(Math.random() * pokemonSpecies) + 1)
    getDatas(true)
}

let changeView = (btn) => {
    if (btn.classList.value !== "grid") {
        galleryContainer.children[2].classList.add("list")
    } else {
        galleryContainer.children[2].classList.remove("list")
    }
}

let initGallery = () => {
    gridBtn.addEventListener("click", (e) => {
        changeView(e.currentTarget)
    })

    listBtn.addEventListener("click", (e) => {
        changeView(e.currentTarget)
    })

    addBtn.addEventListener("click", () => {
        addPicture()
    })
}