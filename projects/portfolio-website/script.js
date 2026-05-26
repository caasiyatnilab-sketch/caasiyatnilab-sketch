document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#') || href.length <= 1) return;

        e.preventDefault();
        const targetSection = document.querySelector(href);

        if (targetSection) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            targetSection.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });

            // Focus management for accessibility
            targetSection.focus({ preventScroll: true });
        }
    });
    
    console.log('Portfolio website loaded successfully!');
});
