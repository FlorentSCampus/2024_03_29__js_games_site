let refreshBtn = document.querySelector("button.refresh")
let formInput = document.querySelector(".feed__container form input")
let formBtn = document.querySelector(".feed__container form button")

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
        firstItem = document.querySelector(".feed__container .item")
        feedContainer.insertBefore(item, firstItem)
        item.append(img, div), div.append(p1, h2, p2)
    }
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

let getInputValue = () => {
    value = parseInt(formInput.value)

    if (formInput.value !== "" && typeof (value) === "number") {
        pokemonIDs = []
        pokemonIDs[0] = value
        formInput.value = ""
        getDatas(true)
    }
}

let initFeed = () => {
    refreshBtn.addEventListener("click", () => {
        refreshItems()
    })

    formBtn.addEventListener("click", () => {
        getInputValue()
    })
}