// Optimize: Using event delegation on the nav element to reduce memory usage and improve initialization performance.
// The DOMContentLoaded wrapper is removed as the script is loaded with 'defer'.
const nav = document.querySelector('nav');

nav.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    // Only intercept internal hash links
    if (href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);

        if (targetSection) {
            // Using native scrollIntoView which respects the CSS 'scroll-behavior: smooth'
            targetSection.scrollIntoView();
            
            // Manage accessibility focus after the scroll is initiated.
            // Using preventScroll: true ensures that focus doesn't cause an instant jump,
            // allowing the smooth scroll to continue gracefully.
            setTimeout(() => {
                targetSection.focus({ preventScroll: true });
                // Update the URL hash without triggering another scroll jump
                history.pushState(null, null, href);
            }, 0);
        }
    }
});

console.log('Portfolio website optimized with event delegation and native smooth scrolling!');
