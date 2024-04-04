let display = 9
let pokemonSpecies = 1025
let pokemonIDs = []

let setPokemonIDs = () => {
    for (i = 0; i < display; i++) {
        pokemonIDs[i] = (Math.floor(Math.random() * pokemonSpecies) + 1)
    }

    if (pokemonIDs.length !== 0) {
        pokemonIDs = []

        for (i = 0; i < display; i++) {
            pokemonIDs[i] = (Math.floor(Math.random() * pokemonSpecies) + 1)
        }
    }
}

let getID = (data) => {
    return data.id
}

let getImage = (data) => {
    return data.sprites.front_default
}

let getName = (obj) => {
    nameFr = null

    obj.names.forEach(name => {
        if (name.language.name === "fr") {
            nameFr = name.name
        }
    })

    return nameFr
}

let getDesc = (obj) => {
    arr = []

    obj.flavor_text_entries.forEach(desc => {
        if (desc.language.name === "fr") {
            arr.push(desc.flavor_text)
        }
    })

    desc = arr[(Math.floor(Math.random() * arr.length))]

    return desc;
}

let setData = (id, img, name, desc, insertBefore) => {
    if (feedContainer !== null) setItem({ id: id, img: img, name: name, desc: desc }, insertBefore)
    if (galleryContainer !== null) setPicture({ img: img, name: name }, insertBefore)
}

let getDatas = (insertBefore = false) => {
    pokemonIDs.forEach(id => {
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

                        setData(pokemonID, pokemonImg, pokemonName, pokemonDesc, insertBefore)
                    })
                    .catch(error => console.error("Error : ", error))
            })
            .catch(error => console.error("Error : ", error))
    })
}

let initDatas = () => {
    setPokemonIDs()
    getDatas()
}