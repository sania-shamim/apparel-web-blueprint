// Minimal enhancement: toggle the mobile navigation and keep aria-expanded in sync.
const btn = document.querySelector('.header__menu-btn');
const nav = document.getElementById('primary-nav');
btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', String(open));
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded','false'); btn.focus(); }
});
