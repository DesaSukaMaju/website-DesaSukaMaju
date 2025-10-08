// js/script.js
// Menandai menu navigasi yang aktif berdasarkan halaman saat ini
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.main-nav a');
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
