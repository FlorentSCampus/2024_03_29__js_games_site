let formGallery = galleryContainer !== null ? galleryContainer.querySelector("form") : null
let gridBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("button.grid") : null
let listBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("button.list") : null
let addBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("button.add") : null
let sendBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("form div > button") : null
let closeBtnGallery = galleryContainer !== null ? galleryContainer.querySelector("form > button") : null
let displayGallery = 2

let setPicture = (data, insertBefore) => {
    item = document.createElement("div")
    img = document.createElement("img")

    item.classList.add("item")
    img.src = data.img
    img.alt = "Sprite de " + data.name

    if (!insertBefore) {
        galleryContainer.children[3].appendChild(item).append(img)
    } else {
        firstItem = galleryContainer.querySelector(".item")
        galleryContainer.children[3].insertBefore(item, firstItem)
        item.append(img)
    }

    setDeleteBtn(item)
    deleteItem(item)
}

let changeView = (btn) => {
    if (btn.className !== "grid") {
        galleryContainer.children[3].classList.add("list")
    } else {
        galleryContainer.children[3].classList.remove("list")
    }
}

let addPicture = () => {
    getInputValue()
}

let showForm = () => {
    formGallery.classList.toggle("open")
}

let initGallery = () => {
    initDatas(displayGallery)

    gridBtnGallery.addEventListener("click", (e) => {
        changeView(e.currentTarget)
    })

    listBtnGallery.addEventListener("click", (e) => {
        changeView(e.currentTarget)
    })

    addBtnGallery.addEventListener("click", () => {
        html.style.overflowY = "hidden"
        showForm()
    })

    sendBtnGallery.addEventListener("click", () => {
        html.style.overflowY = ""
        addPicture()
    })

    closeBtnGallery.addEventListener("click", () => {
        html.style.overflowY = ""
        showForm()
    })
}