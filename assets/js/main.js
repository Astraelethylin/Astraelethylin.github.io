// Dark/Light Mode Toggle & Persistence
const btn = document.getElementById('theme-toggle');
const root = document.body;
const saved = localStorage.getItem('theme');

if (saved === 'dark') root.classList.add('dark');

btn.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
});

// Include current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
