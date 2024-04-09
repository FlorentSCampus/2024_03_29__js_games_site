let html = document.querySelector("html")
let carouselContainer = document.querySelector(".carousel__container")
let feedContainer = document.querySelector(".feed__container")
let galleryContainer = document.querySelector(".gallery__container")
let gameContainer = document.querySelector(".game__container")

window.addEventListener("DOMContentLoaded", () => {
    if (carouselContainer !== null) initCarousel()
    if (feedContainer !== null) initFeed()
    if (galleryContainer !== null) initGallery()
    if (gameContainer !== null) initGame()
})