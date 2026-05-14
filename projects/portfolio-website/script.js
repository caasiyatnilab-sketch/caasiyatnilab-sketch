(function() {
    // Bolt Optimization: Event delegation on <nav> improves performance and reduces memory usage.
    // Offloading smooth scroll to CSS ('scroll-behavior: smooth') improves performance by using the browser's compositor thread.
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Bolt Optimization: Call focus({ preventScroll: true }) to maintain accessibility
                // without interrupting the native CSS smooth scroll animation.
                targetSection.focus({ preventScroll: true });
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
})();
