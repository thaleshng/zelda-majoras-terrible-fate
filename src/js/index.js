const trailerButton = document.querySelector(".trailer-button")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close-modal")
const videoTrailer = document.getElementById("video")
let srcVideo = videoTrailer.attributes.src.value

trailerButton.addEventListener("click", () => {
    modal.classList.add("opened")
    videoTrailer.src = `${srcVideo}`
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("opened")
    videoTrailer.src = ""
})