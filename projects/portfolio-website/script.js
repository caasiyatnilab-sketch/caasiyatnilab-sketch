document.addEventListener('DOMContentLoaded', () => {
  const mainNav = document.getElementById('main-nav');
  const skipLink = document.querySelector('.skip-link');

  const handleNavClick = (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const targetId = link.getAttribute('href');
    if (!targetId || !targetId.startsWith('#') || targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.focus({ preventScroll: true });
    }
  };

  [mainNav, skipLink].forEach(el => el?.addEventListener('click', handleNavClick));
  console.log('Portfolio website loaded successfully!');
});
