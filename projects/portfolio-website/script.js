/**
 * Performance Optimization: Event Delegation
 * Instead of attaching individual event listeners to every navigation link,
 * we use a single listener on the <nav> element. This reduces memory usage
 * and improves performance, especially as the number of links grows.
 *
 * Note: 'DOMContentLoaded' wrapper is removed because the script is now
 * loaded with 'defer', ensuring the DOM is ready when this executes.
 */
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');

        // Early return if not a link or if it's an external link
        if (!link) return;

        const targetId = link.getAttribute('href');

        // Only handle internal hash links
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
