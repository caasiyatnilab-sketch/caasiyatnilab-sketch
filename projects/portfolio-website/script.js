performance.mark('script-execution-start');

/**
 * Optimized navigation using event delegation.
 * Reduces the number of event listeners from N (number of links) to 1.
 * Also removes the DOMContentLoaded wrapper as the script is now deferred.
 */
const nav = document.querySelector('nav');
if (nav) {
    nav.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');
        // Only handle internal anchor links
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (err) {
                // Defensive check for malformed selectors
            }
        }
    });
}

performance.measure('bolt-script-init', 'script-execution-start');
console.log('Portfolio website loaded successfully!');
