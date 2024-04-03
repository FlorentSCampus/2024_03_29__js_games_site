let limit = 9
let speciesNb = 1025
let refreshBtn = document.querySelector("button.refresh")
let feed = document.querySelector(".feed__container")
let idList = []

for (i = 0; i < limit; i++) {
    idList[i] = Math.floor(Math.random() * speciesNb)
}

idList.forEach(id => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/")
        .then(res => res.json())
        .then(data => {
            fetch(data.species.url)
                .then(res => res.json())
                .then(obj => {
                    pokemonID = getID(data)
                    pokemonImg = getImage(data)
                    pokemonName = getName(obj)
                    pokemonDesc = getDesc(obj)

                    setCard({ id: pokemonID, img: pokemonImg, name: pokemonName, desc: pokemonDesc })
                })
                .catch(error => console.error("Error : ", error))
        })
        .catch(error => console.error("Error : ", error))
})

getID = (data) => {
    return data.id
}

getImage = (data) => {
    return data.sprites.front_default
}

getName = (obj) => {
    nameFr = null

    obj.names.forEach(name => {
        if (name.language.name === "fr") {
            nameFr = name.name
        }
    })

    return nameFr
}

getDesc = (obj) => {
    arr = []

    obj.flavor_text_entries.forEach(desc => {
        if (desc.language.name === "fr") {
            arr.push(desc.flavor_text)
        }
    })

    desc = arr[(Math.floor(Math.random() * arr.length))]

    return desc;
}

setCard = (data) => {
    let item = document.createElement("div")
    let img = document.createElement("img")
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")

    item.classList.add("item")
    img.src = data.img
    img.alt = "Sprite de " + data.name
    div.classList.add("text")
    h2.innerText = data.name
    p1.innerText = "#" + data.id
    p2.innerText = data.desc

    feed.appendChild(item).append(img, div)
    div.append(p1, h2, p2)
}

refresh = () => {
    location.reload()
}

refreshBtn.addEventListener("click", () => {
    refresh()
})