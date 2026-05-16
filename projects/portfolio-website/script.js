(function() {
    // Bolt: Optimized event delegation and focus management
    // Replaced multiple link listeners with a single delegation listener on the nav container
    // Removed JS scrollIntoView in favor of CSS scroll-behavior: smooth for better performance
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Only handle internal anchor links
            if (href && href.startsWith('#') && href.length > 1) {
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    // We allow the default anchor navigation to trigger CSS smooth scrolling
                    // and handle focus manually for accessibility
                    targetSection.focus({ preventScroll: true });
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
})();
