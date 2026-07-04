// Use event delegation for navigation links to improve performance
const nav = document.querySelector('nav');

nav.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    
    // Only handle internal links (starting with #)
    if (target && target.hash && target.hash.startsWith('#')) {
        const targetSection = document.querySelector(target.hash);

        if (targetSection) {
            // Smooth scrolling is handled by CSS (scroll-behavior: smooth)
            // We only need to manage focus for accessibility if needed,
            // but for simple navigation, the browser handles it.
            // Using scrollIntoView() without 'smooth' as CSS handles it.
            e.preventDefault();
            targetSection.scrollIntoView();
        }
    }
});

console.log('Portfolio website loaded successfully!');
