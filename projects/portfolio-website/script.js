document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#') || href.length <= 1) return;

        e.preventDefault();

        try {
            const targetSection = document.querySelector(href);
            if (targetSection) {
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                targetSection.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                // Ensure focus follows the scroll for screen readers and keyboard users
                // timeout to allow scroll to complete or at least start
                setTimeout(() => {
                    targetSection.focus({ preventScroll: true });
                }, 100);
            }
        } catch (error) {
            console.error('Smooth scroll failed:', error);
        }
    });

    console.log('Portfolio website loaded successfully!');
});
