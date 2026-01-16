const sidebar = document.querySelector('.pokeball-nav');
const toggleBtn = document.getElementById('toggleSidebar');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  document.body.classList.toggle('sidebar-hidden');
  document.querySelector('header').classList.toggle('sidebar-hidden');
});