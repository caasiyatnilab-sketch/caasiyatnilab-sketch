document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      // Only handle internal fragment links
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        try {
          const targetSection = document.querySelector(targetId);

          if (targetSection) {
            /**
             * PERFORMANCE OPTIMIZATION:
             * We rely on the browser's native fragment navigation and CSS `scroll-behavior: smooth`
             * to handle the scrolling animation. This is more efficient than `element.scrollIntoView()`
             * as it can be offloaded to the compositor thread.
             *
             * ACCESSIBILITY:
             * We manually manage focus to ensure screen readers and keyboard users are
             * correctly moved to the target section.
             */
            targetSection.focus();
          }
        } catch (error) {
          console.error('Invalid selector:', targetId);
        }
      }
    });
  });

  console.log('Portfolio website loaded successfully with optimized performance!');
});
