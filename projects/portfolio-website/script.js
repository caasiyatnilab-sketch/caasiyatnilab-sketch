(function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Use event delegation on the nav element for better performance
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Only handle in-page anchor links
        if (href && href.startsWith('#') && href.length > 1) {
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                // Focus the target section for accessibility (screen readers)
                // { preventScroll: true } prevents the browser from jumping to the element
                // while the CSS smooth scroll handles the animation.
                targetSection.focus({ preventScroll: true });
            }
        }
    });
    
    console.log('Portfolio website scripts initialized with optimized navigation.');
})();