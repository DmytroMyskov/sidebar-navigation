const sidebar = document.querySelector('aside');
const sidebarToggle = document.querySelector('#sidebar-toggle');
const themeToggle = document.querySelector('#theme-toggle');

sidebarToggle.onclick = toggleSidebar;
themeToggle.onclick = toggleTheme;

function toggleSidebar() {
  sidebar.classList.toggle('open');
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}