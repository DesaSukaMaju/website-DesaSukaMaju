// highlight nav aktif
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelectorAll('.main-nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  nav.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
