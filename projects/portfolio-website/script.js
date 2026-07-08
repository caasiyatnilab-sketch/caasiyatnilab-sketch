document.addEventListener('DOMContentLoaded', () => {
    // Optimization: Use event delegation on the nav element to reduce event listeners
    const nav = document.querySelector('nav');

    if (nav) {
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();
                    // Performance boost: Browser handles smooth scroll via CSS (scroll-behavior: smooth)
                    // JS only handles the scroll initiation and focus management
                    targetSection.scrollIntoView();

                    // Accessibility: Manage focus after scroll
                    targetSection.focus({ preventScroll: true });
                }
            }
        });
    }

    console.log('Portfolio website loaded successfully!');
});
