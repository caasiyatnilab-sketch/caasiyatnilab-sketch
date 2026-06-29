performance.mark('script-execution-start');

/**
 * Performance Optimization:
 * 1. Event Delegation: Attached a single listener to the <nav> element instead of multiple
 *    listeners on individual <a> tags. This reduces memory footprint and improves initialization time.
 * 2. Removed DOMContentLoaded wrapper: The script is now loaded with 'defer' in the <head>,
 *    which natively ensures it executes after the DOM is fully parsed.
 */
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link) {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');