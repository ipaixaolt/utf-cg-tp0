const music = document.getElementById("bg-music");
const musicSource = document.getElementById("music-source");
const toggle = document.getElementById("music-toggle");

let isMusicPlaying = true;

toggle.addEventListener("click", () => {
    isMusicPlaying = !isMusicPlaying;

    if (!isMusicPlaying) {
        const source = getCurrentMusic();

        if (musicSource.getAttribute("src") !== source) {
            musicSource.setAttribute("src", source);
            music.load();
        }

        music.play().catch(() => {});
    } else {
        music.pause();
    }

    updateToggleIcon();
});

function updateToggleIcon() {
    if (!isMusicPlaying) {
        toggle.classList.add("music-playing");
        toggle.setAttribute("aria-label", "Pausar música");
    } else {
        toggle.classList.remove("music-playing");
        toggle.setAttribute("aria-label", "Ativar música");
    }
}


function updateMusic() {
    const newSource = getCurrentMusic();
    const currentSource = musicSource.getAttribute("src");

    if (currentSource !== newSource) {
        musicSource.setAttribute("src", newSource);
        music.load();

        if (!isMusicPlaying) {
            music.play().catch(() => {});
        }
    }

    if (isMusicPlaying) {
        music.pause();
    }

    updateToggleIcon();
}

const lightModeMusic = "./audio/yureru-kimochi-TakayukiNegishi.mp3";
const darkModeMusic = "./audio/yoru-no-umi-TakayukiNegishi.mp3";
function getCurrentMusic() {
    return document.body.classList.contains("darkmode")
        ? darkModeMusic
        : lightModeMusic;
}


const observer = new MutationObserver(updateMusic);
observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
});

updateToggleIcon();