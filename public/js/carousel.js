let boxImg = carouselContainer !== null ? carouselContainer.querySelector(".box") : null
let w

let carouselSize = () => {
    w = carouselContainer.clientWidth
}

let moveOn = () => {
    boxImg.style.transform = "translateX(" + ((w * (-1)) + "px") + ")"

    setTimeout(() => {
        boxImg.appendChild(boxImg.children[0])
        boxImg.style.transition = "none"
        boxImg.style.transform = "translateX(0)"
    }, 1000)
    
    boxImg.style.transition = ""
}

let initCarousel = () => {
    carouselSize()

    interval = setInterval(moveOn, 5000)

    window.addEventListener("resize", () => {
        carouselSize()
    })
}