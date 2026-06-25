document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal hash links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Programmatic focus management for accessibility
                    // A 500ms delay ensures the smooth scroll is sufficiently advanced
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                        // Update URL hash without jarring jump
                        history.pushState(null, '', targetId);
                    }, 500);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
