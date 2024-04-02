let feed = document.querySelector(".feed__container")
let limit = 9

for (i = 0; i < limit; i++) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + (i + 1) + "/")
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
}

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
    // item = document.createElement("div")
    // img = document.createElement("img")
    // div = document.createElement("div")
    // h2 = document.createElement("h2")
    // p1 = document.createElement("p")
    // p2 = document.createElement("p")

    // item.classList.add("item")
    // img.src = data.img
    // img.alt = "Sprite de " + data.name
    // div.classList.add("text")

    // feed.appendChild(item).append(img, div)
    // div.append(p1, h2, p2)


    // let item = document.createElement("div")
    // let img = document.createElement("img")
    // let id
    // item.classList.add("item")
    // feed.appendChild(item)
}



// getAPI()
// setCard(pokemonData)

// let img = document.createElement("img")
// img.src = Object.keys(data).sprite
// feedItems.appendChild(img)