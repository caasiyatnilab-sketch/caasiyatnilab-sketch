performance.mark('script-execution-start');

/**
 * BOLT OPTIMIZATION:
 * 1. Event Delegation: One listener on the <nav> instead of N listeners on links.
 * 2. Removed DOMContentLoaded wrapper: Using 'defer' in <head> handles this.
 * 3. Cached DOM elements: Avoid re-querying the DOM.
 */

const nav = document.getElementById('main-nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        const href = link?.getAttribute('href');

        if (href && href.startsWith('#')) {
            e.preventDefault();
            try {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (err) {
                console.error('Invalid selector:', href);
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
performance.mark('script-execution-end');
performance.measure('bolt-script-init', 'script-execution-start', 'script-execution-end');
