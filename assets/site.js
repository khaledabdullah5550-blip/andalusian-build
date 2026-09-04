document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navlinks');

function closeMobileNav() {
  if (!menuBtn || !nav) return;
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '×' : '☰';
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMobileNav();
      nav.querySelectorAll('details[open]').forEach(details => details.removeAttribute('open'));
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMobileNav();
      nav.querySelectorAll('details[open]').forEach(details => details.removeAttribute('open'));
      menuBtn.focus();
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
      nav.querySelectorAll('details[open]').forEach(details => details.removeAttribute('open'));
    });
  });
}
