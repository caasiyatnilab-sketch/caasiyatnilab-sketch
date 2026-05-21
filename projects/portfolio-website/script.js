const nav = document.querySelector('nav');

// Performance: Use event delegation on the <nav> element to reduce memory usage
// and initialization time by attaching a single listener instead of one per link.
if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        const href = link ? link.getAttribute('href') : null;

        // Only handle internal anchor links
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            
            try {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    // Performance/A11y: Respect user's motion preferences
                    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                    targetSection.scrollIntoView({
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });

                    // Accessibility: Move focus to the target section after scroll
                    targetSection.setAttribute('tabindex', '-1');
                    targetSection.focus({ preventScroll: true });
                }
            } catch (err) {
                console.error('Error handling navigation scroll:', err);
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
