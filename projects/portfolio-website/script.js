document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;
            
            const href = link.getAttribute('href');

            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Programmatic focus management for accessibility
                    // A small delay ensures the smooth scroll has started or completed
                    // enough for focus to be meaningful.
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                        // Update URL without jarring jump
                        history.pushState(null, '', targetId);
                    }, 500);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});