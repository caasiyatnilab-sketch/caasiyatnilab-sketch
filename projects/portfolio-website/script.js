// Optimized with event delegation on the <nav> element to reduce memory usage and improve performance
const nav = document.querySelector('nav');

nav.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    
    // Only intercept internal hash links
    if (link && link.hash && link.origin === window.location.origin) {
        const targetSection = document.querySelector(link.hash);

        if (targetSection) {
            // We allow the default browser behavior for the scroll (handled by CSS scroll-behavior: smooth)
            // and the hash update in the URL.
            
            // We manage focus for accessibility.
            // preventScroll: true ensures the focus ring updates without an instant jump,
            // allowing the smooth scroll animation to proceed naturally.
            targetSection.focus({ preventScroll: true });
        }
    }
});

console.log('Portfolio website loaded successfully!');
