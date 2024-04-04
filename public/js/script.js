let feedContainer = document.querySelector(".feed__container")
let galleryContainer = document.querySelector(".gallery__container")
let gameContainer = document.querySelector(".game__container")

window.addEventListener("DOMContentLoaded", () => {
    initDatas()
    
    if (feedContainer !== null) initFeed()
    if (galleryContainer !== null) initGallery()
    if (gameContainer !== null) null // initGame()
})