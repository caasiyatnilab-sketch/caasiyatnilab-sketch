(function() {
    // Performance Optimization: Use event delegation on the nav container to reduce initialization time and memory usage.
    // This replaces individual event listeners on every anchor tag.
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            
            // Optimization: Only handle internal links that start with '#'.
            if (link && link.getAttribute('href').startsWith('#')) {
                const targetId = link.getAttribute('href');

                // Prevent runtime invalid selector errors for '#' or empty hashes.
                if (targetId === '#') return;

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();

                    // Optimization: Use CSS-based smooth scrolling (via styles.css) for better performance.
                    // Manual focus management for accessibility (screen readers) while respecting native animation.
                    targetSection.focus({ preventScroll: true });

                    // Fallback for browsers that don't support CSS scroll-behavior: smooth
                    if (!('scrollBehavior' in document.documentElement.style)) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        targetSection.scrollIntoView();
                    }
                }
            }
        });
    }
    
    console.log('Portfolio website optimized and loaded.');
})();