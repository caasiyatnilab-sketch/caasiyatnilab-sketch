(function() {
    // Optimized event listener using event delegation and native smooth scrolling
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.hash) {
                const targetSection = document.querySelector(link.hash);
                if (targetSection) {
                    // Focus the target section for accessibility (screen readers)
                    // { preventScroll: true } is used to avoid interfering with CSS smooth scroll
                    targetSection.focus({ preventScroll: true });
                }
            }
        });
    }
    console.log('Portfolio website loaded successfully!');
})();
