const button = document.getElementById("mistery-button");
const popup = document.getElementById("video-popup");
const closeBtn = document.getElementById("popup-close");
const video = document.getElementById("youtube-video");

button.addEventListener("click", () => {
    popup.style.display = "flex";
    video.src = "https://www.youtube.com/embed/0hEYvdMoF2g?autoplay=1";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    video.src = "";
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
        video.src = "";
    }
});