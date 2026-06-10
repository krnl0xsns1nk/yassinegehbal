document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.timeline-item');

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach((item, i) => {
    item.classList.add('reveal');
    item.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(item);
  });
});
