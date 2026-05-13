// Use event delegation on the nav element to improve initialization performance and memory usage.
const nav = document.querySelector('nav');
if (nav) nav.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    
    // Only handle internal links (those starting with '#') and exclude empty/hash-only links.
    if (link && link.getAttribute('href').startsWith('#') && link.getAttribute('href').length > 1) {
        const targetSection = document.querySelector(link.getAttribute('href'));

        if (targetSection) {
            // Move focus to the target section for accessibility (screen readers).
            // preventScroll: true is used to avoid interfering with the native CSS smooth scroll.
            targetSection.focus({ preventScroll: true });
        }
    }
});

console.log('Portfolio website loaded successfully!');
