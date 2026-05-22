// Optimization: Using event delegation on the 'nav' element to reduce memory usage and initialization time.
// Since the script is loaded with 'defer', the DOM is already parsed, so 'DOMContentLoaded' is redundant.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');

        if (link) {
            const href = link.getAttribute('href');
            
            // Ensure the click is on a valid internal anchor link (length > 1 to avoid just '#')
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        // Respect prefers-reduced-motion for accessibility and performance
                        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

                        targetSection.scrollIntoView({ behavior });

                        // Accessibility: focus the target section after scrolling
                        targetSection.setAttribute('tabindex', '-1');
                        targetSection.focus({ preventScroll: true });
                    }
                } catch (err) {
                    // Hardened: fail securely and log error internally to avoid breaking execution
                    console.error('Smooth scroll failed for selector:', href, err);
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully with optimized event handling!');
