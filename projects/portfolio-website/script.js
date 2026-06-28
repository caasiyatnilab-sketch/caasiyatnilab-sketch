/**
 * PERFORMANCE OPTIMIZATION:
 * 1. Removed DOMContentLoaded wrapper as the 'defer' attribute in the <script> tag
 *    natively ensures execution occurs after HTML parsing.
 * 2. Implemented event delegation on the <nav> element to reduce the number of
 *    event listeners from N to 1, improving memory efficiency and initialization speed.
 */

const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Only handle internal hash links for smooth scrolling
        if (href && href.startsWith('#') && href.length > 1) {
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Update URL hash without causing a native jump, maintaining deep-linking
                history.pushState(null, '', href);
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
