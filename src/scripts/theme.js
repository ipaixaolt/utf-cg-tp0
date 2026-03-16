let darkmode = localStorage.getItem('darkmode');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'true');
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "true") enableDarkMode();

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "true" ? enableDarkMode() : disableDarkMode();
});