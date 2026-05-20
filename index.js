const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

toggle.textContent = html.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';

toggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggle.textContent = isDark ? '🌙' : '☀️';
});
