let refreshBtnFeed = feedContainer !== null ? feedContainer.querySelector("button.refresh") : null
let sendBtnFeed = feedContainer !== null ? feedContainer.querySelector("form button") : null

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
        feedContainer.appendChild(item).append(img, div), div.append(p1, h2, p2)
    } else {
        firstItem = feedContainer.querySelector(".item")
        feedContainer.insertBefore(item, firstItem)
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
    items = document.querySelectorAll(".feed__container > .item")
    
    removeItems(items)
    initDatas()
}

let initFeed = () => {
    refreshBtnFeed.addEventListener("click", () => {
        refreshItems()
    })

    sendBtnFeed.addEventListener("click", () => {
        getInputValue()
    })
}