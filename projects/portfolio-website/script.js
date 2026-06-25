/**
 * PERFORMANCE OPTIMIZATION: Event Delegation
 * Instead of attaching individual click listeners to every <a> tag in the nav,
 * we use a single listener on the <nav> element. This reduces memory footprint
 * and improves initial script execution performance by minimizing DOM interactions.
 *
 * Note: The DOMContentLoaded wrapper is removed as this script is intended to be
 * loaded with the 'defer' attribute in the <head>, which natively ensures the
 * DOM is ready before execution.
 */
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        // Use event delegation to handle clicks on anchor tags
        const link = e.target.closest('a');

        // Validate that it's a link and it's an internal hash link
        if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
            const targetId = link.getAttribute('href');
            
            // Prevent default jump behavior if we have a valid target
            if (targetId.length > 1) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Defensive coding against invalid selectors
                    console.error('Smooth scroll failed:', error);
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
