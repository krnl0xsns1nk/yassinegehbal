/* ============================================================
   MAIN.JS — Shared config, nav, scroll reveal
   ============================================================ */

const SITE_CONFIG = {
	name:      'ياسين جهبال',
	title:     'أستاذ التاريخ والجغرافيا',
	email:     'mailto:yassinegeh@gmail.com',
	whatsapp:  'https://wa.me/212700732720',
	facebook:  'https://www.facebook.com/100069673728550/',
	instagram: 'https://www.instagram.com/prof_yassinegeh',
	youtube:   'https://m.youtube.com/@yassinewassim7452',
	tiktok:    'https://www.tiktok.com/@caochyassine',
};                                                                            
/* ---- Inject contact links ---- */
function applyConfig() {
  document.querySelectorAll('[data-email]').forEach(el => {
    el.href = SITE_CONFIG.email;
  });
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = SITE_CONFIG.whatsapp;
  });
  document.querySelectorAll('[data-facebook]').forEach(el => {
    el.href = SITE_CONFIG.facebook;
  });
  document.querySelectorAll('[data-instagram]').forEach(el => {
    el.href = SITE_CONFIG.instagram;
  });
  document.querySelectorAll('[data-youtube]').forEach(el => {
    el.href = SITE_CONFIG.youtube;
  });
  document.querySelectorAll('[data-tiktok]').forEach(el => {
    el.href = SITE_CONFIG.tiktok;
  });
}

/* ---- Mobile Nav Toggle ---- */
function initNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const links     = document.querySelector('.nav__links');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav')) links.classList.remove('open');
  });

  // Active link highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ---- Scroll Reveal ---- */
function initReveal() {
    const elements = document.querySelectorAll('.reveal:not(.visible)');
//  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

/* ---- Respect reduced motion ---- */
function respectReducedMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
    });
  }
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  initNav();
  initReveal();
  respectReducedMotion();
});
