let formGallery = galleryContainer !== null ? galleryContainer.querySelector("form") : null
let gridBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("button.grid") : null
let listBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("button.list") : null
let addBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("button.add") : null
let sendBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("form div > button") : null
let closeBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("form > button") : null

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

let changeView = (btn) => {
    if (btn.className !== "grid") {
        galleryContainer.children[2].classList.add("list")
    } else {
        galleryContainer.children[2].classList.remove("list")
    }
}

let addPicture = () => {
    getInputValue()
}

let showForm = () => {
    formGallery.classList.toggle("open")
}

let initGallery = () => {
    gridBtnGallery.addEventListener("click", (e) => {
        changeView(e.currentTarget)
    })

    listBtnGallery.addEventListener("click", (e) => {
        changeView(e.currentTarget)
    })

    addBtnGallery.addEventListener("click", () => {
        showForm()
    })

    sendBtnGallery.addEventListener("click", () => {
        addPicture()
    })

    closeBtnGallery.addEventListener("click", () => {
        showForm()
    })
}