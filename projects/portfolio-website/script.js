(function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        // Use event delegation for better performance and memory efficiency
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // native CSS smooth scrolling is used, so we only need to manage focus
                // preventScroll: true ensures the focus change doesn't cause a jump
                targetSection.focus({ preventScroll: true });
            }
        });
    }
    
    console.log('Portfolio website optimized and loaded!');
})();