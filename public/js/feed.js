let itemContainer = feedContainer !== null ? feedContainer.querySelector(".item__container") : null
let refreshBtnFeed = feedContainer !== null ? feedContainer.querySelector("button.refresh") : null
let sendBtnFeed = feedContainer !== null ? feedContainer.querySelector("form button") : null
let displayFeed = 2

let setItem = (data, insertBefore) => {
    item = document.createElement("div")
    img = document.createElement("img")
    div = document.createElement("div")
    h2 = document.createElement("h2")
    p1 = document.createElement("p")
    p2 = document.createElement("p")

    item.classList.add("item")
    img.src = data.img
    img.alt = "Sprite de " + data.name
    div.classList.add("text")
    h2.innerText = data.name
    p1.innerText = "#" + data.id
    p2.innerText = data.desc

    if (!insertBefore) {
        itemContainer.appendChild(item).append(img, div), div.append(p1, h2, p2)
    } else {
        firstItem = itemContainer.querySelector(".item")
        itemContainer.insertBefore(item, firstItem)
        item.append(img, div), div.append(p1, h2, p2)
    }

    setDeleteBtn(item)
    deleteItem(item)
}

let removeItems = (items) => {
    items.forEach(item => {
        item.remove()
    })
}

let refreshItems = () => {
    items = itemContainer.querySelectorAll(".item")
    
    removeItems(items)
    initDatas(displayFeed)
}

let initFeed = () => {
    initDatas(displayFeed)

    refreshBtnFeed.addEventListener("click", () => {
        refreshItems()
    })

    sendBtnFeed.addEventListener("click", () => {
        getInputValue()
    })
}