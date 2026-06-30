/**
 * PERFORMANCE OPTIMIZATION:
 * 1. Event Delegation: Using a single listener on 'nav' instead of one per link reduces memory overhead.
 * 2. Script Loading: Moved to <head> with 'defer' for non-blocking parallel download.
 * 3. Accessibility: Respects 'prefers-reduced-motion' for programmatic scrolling.
 */

const nav = document.querySelector('nav');

// Event delegation for navigation links
nav.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Respect user preference for reduced motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            targetSection.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    }
});

console.log('Portfolio website loaded successfully!');
