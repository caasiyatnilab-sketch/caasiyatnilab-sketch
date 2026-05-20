document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        /**
         * Performance Optimization: Event Delegation
         * Reduces memory overhead and initialization time by using a single event listener
         * on the navigation container instead of multiple listeners on individual links.
         */
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            const href = link ? link.getAttribute('href') : null;
            
            // Check if it's a valid internal anchor link
            if (href && href.startsWith('#') && href.length > 1) {
                const targetId = href;

                try {
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        e.preventDefault();

                        /**
                         * Performance & Accessibility: Honor reduced motion preference.
                         * Skipping 'smooth' behavior for users who prefer reduced motion
                         * saves CPU cycles and respects user preferences.
                         */
                        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                        targetSection.scrollIntoView({
                            behavior: prefersReducedMotion ? 'auto' : 'smooth'
                        });

                        // Accessibility: Ensure focus follows the scroll
                        targetSection.setAttribute('tabindex', '-1');
                        targetSection.focus({ preventScroll: true });
                    }
                } catch (err) {
                    // Fail securely by catching malformed selectors
                    console.error('Error selecting element:', targetId, err);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
