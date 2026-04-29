/* ===================================================
   Gwandolina – main.js
   =================================================== */

// ---- Current year in footer ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Mobile navigation toggle ----
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('open', !isOpen);
  });

  // Close menu when a nav link is clicked
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
      navToggle.focus();
    }
  });
}

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.main-nav a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
