let difficultiesBtn = gameContainer !== null ? gameContainer.querySelectorAll(".difficulties button") : null
let cardContainer = gameContainer !== null ? gameContainer.querySelector(".card__container") : null
let difficulties = { easy: 6, medium: 8, hard: 10 }
let displayGame = difficulties.easy
let flip = 0

let setDifficulty = (button = null) => {
    if (button !== null) {
        Object.entries(difficulties).forEach((difficulty) => {
            if (difficulty[0] === button.name) {
                displayGame = (difficulty[1] / 2)
                return (difficulty[1] / 2)
            }
        })
    } else {
        displayGame = (difficulties.easy / 2)
        return (difficulties.easy / 2)
    }
}

let setCard = (data) => {
    for (i = 0; i < 2; i++) {
        rand = Math.floor(Math.random() * 2)

        card = document.createElement("div")
        front = document.createElement("div")
        back = document.createElement("div")
        img = document.createElement("img")

        card.classList.add("card")
        card.setAttribute("data-name", data.name)
        card.setAttribute("data-same", "")
        front.classList.add("front")
        back.classList.add("back")
        img.src = data.img
        img.alt = "Sprite de " + data.name

        if (cardContainer.querySelector(".card") === null) {
            cardContainer.appendChild(card).append(front, back), back.append(img)
        } else {
            if (rand === 0) {
                cardContainer.appendChild(card).append(front, back), back.append(img)
            } else {
                firstCard = cardContainer.querySelector(".card")
                cardContainer.insertBefore(card, firstCard)
                card.append(front, back), back.append(img)
            }
        }

        flipCard(card)
    }
}

let removeCards = (cards) => {
    cards.forEach(card => {
        card.remove()
    })
}

refreshCards = (display) => {
    cards = cardContainer.querySelectorAll(".card")

    removeCards(cards)
    initDatas(display)
}

let flipCard = (card) => {
    card.addEventListener("click", () => {
        if (!card.classList.contains("flip")) {
            card.classList.toggle("flip")
        }

        checkCard(card.dataset.name)
    })
}

let checkCard = (attr) => {
    same = true
    flip++

    if (flip === 2) {
        cardContainer.querySelectorAll(".card").forEach((card) => {
            if (card.classList.contains("flip") && card.dataset.name !== attr && card.dataset.same !== "true") {
                same = false
            }
        })

        cardContainer.querySelectorAll(".card").forEach((card) => {
            if (card.classList.contains("flip")) {
                if (!same) {
                    if (card.dataset.same !== "true") {
                        setTimeout(() => {
                            card.classList.remove("flip")
                        }, 1000)
                    }
                } else {
                    card.setAttribute("data-same", true)
                }
            }
        })

        flip = 0
    }
}

let initGame = () => {
    initDatas(setDifficulty())

    difficultiesBtn.forEach(button => {
        button.addEventListener("click", () => {
            setDifficulty(button)
            refreshCards(displayGame)
        })
    })
}