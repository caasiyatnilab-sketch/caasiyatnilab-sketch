/**
 * Performance-optimized script for handling focus management after smooth scrolling.
 * Uses native CSS smooth scroll for performance and ensures accessibility.
 */
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Wait for native CSS smooth scroll to complete before moving focus
            // This ensures a smooth visual transition and proper accessibility
            setTimeout(() => {
                targetSection.focus({ preventScroll: true });
            }, 800);
        }
    });
});

console.log('Portfolio website loaded successfully!');
