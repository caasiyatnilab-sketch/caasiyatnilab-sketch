document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;
            
            const href = link.getAttribute('href');

            // Only handle internal hash links
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Update URL without jarring jump
                    history.pushState(null, '', targetId);

                    // Smooth scroll to target
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Move focus to target section after scroll
                    // Delay focus to allow scroll to start/complete for better SR experience
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                    }, 500);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
