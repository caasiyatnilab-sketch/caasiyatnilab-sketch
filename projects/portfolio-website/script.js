'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Optimization: Use event delegation on the <nav> element to reduce memory usage
    // and improve initialization performance by attaching a single event listener.
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');

            // Validation: Ensure it's an internal anchor
            if (href && href.startsWith('#')) {
                e.preventDefault();

                // Optimization: scroll to top if href is just '#'
                if (href === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    document.body.focus();
                    return;
                }

                // Optimization: Use getElementById for faster DOM lookup than querySelector
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    // Accessibility: move focus to the target section
                    targetSection.setAttribute('tabindex', '-1');
                    targetSection.focus();
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
