// Optimized: Replaced custom JS smooth scroll with native CSS scroll-behavior
// and added focus management for improved accessibility.
// The 'DOMContentLoaded' wrapper is removed as the script is now deferred.
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                // targetSection.focus() triggers a smooth scroll due to 'scroll-behavior: smooth' in CSS
                // and correctly moves focus for screen readers.
                targetSection.focus();
                // Update URL hash without causing a second jump/scroll
                window.history.pushState(null, null, targetId);
            }
        }
    });
});

console.log('Portfolio website loaded successfully!');
