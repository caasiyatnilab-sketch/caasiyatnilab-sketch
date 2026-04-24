document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only handle internal links
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);

                    // Smooth scroll to target
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Move focus to target for accessibility
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                    }, 100);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});