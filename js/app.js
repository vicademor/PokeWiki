const sidebar = document.querySelector('.pokeball-nav');
const toggleBtn = document.getElementById('toggleSidebar');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  document.body.classList.toggle('sidebar-hidden');
  document.querySelector('header').classList.toggle('sidebar-hidden');
});

const targetsDarkTheme = document.querySelectorAll('.texto-gen, h2');
const targetsDarkElement = document.querySelectorAll('.pokeball-nav, .titulos');

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    targetsDarkTheme.forEach(el => el.classList.toggle("dark-theme"));
    targetsDarkElement.forEach(el => el.classList.toggle("dark-element"));

    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    targetsDarkTheme.forEach(el => el.classList.add("dark-theme"));
    targetsDarkElement.forEach(el => el.classList.add("dark-element"));
}