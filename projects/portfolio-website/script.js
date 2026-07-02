document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;

                try {
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        // Smooth scroll
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Focus management for accessibility
                        targetSection.setAttribute('tabindex', '-1');
                        targetSection.focus({ preventScroll: true });

                        // Update URL hash without jumping
                        history.pushState(null, null, targetId);
                    }
                } catch (error) {
                    console.error('Invalid selector:', targetId);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
