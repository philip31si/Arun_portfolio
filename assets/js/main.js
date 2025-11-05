// ===== Theme Toggle =====
const themeButton = document.getElementById('theme-button');
const body = document.body;


const selectedTheme = localStorage.getItem('selected-theme');


if (selectedTheme) {
body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
}


themeButton.addEventListener('click', () => {
body.classList.toggle('dark-theme');
const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
localStorage.setItem('selected-theme', theme);
});
