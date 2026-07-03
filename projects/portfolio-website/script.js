performance.mark('script-execution-start');

/**
 * BOLT OPTIMIZATION:
 * 1. Event Delegation: Attached a single listener to 'nav' instead of individual links.
 *    This reduces memory overhead and improves initialization speed.
 * 2. DOM Caching: Cached section elements to avoid repeated querySelector calls.
 * 3. Defer Script: Removed DOMContentLoaded wrapper as 'defer' attribute ensures
 *    the script runs after the DOM is ready, reducing TTI.
 */

const nav = document.querySelector('nav');
// Cache for DOM elements to avoid repeated lookups
const sectionCache = {};

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            
            // BOLT OPTIMIZATION: Use cache for faster section lookup
            if (!sectionCache[targetId]) {
                sectionCache[targetId] = document.querySelector(targetId);
            }

            const targetSection = sectionCache[targetId];
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');

performance.measure('bolt-script-init', 'script-execution-start');
