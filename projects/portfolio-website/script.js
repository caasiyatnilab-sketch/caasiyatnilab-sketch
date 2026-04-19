document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal hash link
            if (href && href.startsWith('#')) {
                try {
                    const target = document.querySelector(href);

                    if (target) {
                        e.preventDefault();

                        // Smooth scroll to target
                        target.scrollIntoView({ behavior: 'smooth' });

                        // Update URL hash without triggering default jump
                        history.pushState(null, null, href);

                        // Move focus to target for accessibility
                        // Use preventScroll to avoid fighting with scrollIntoView
                        target.focus({ preventScroll: true });
                    }
                } catch (error) {
                    console.warn('Navigation target not found:', href);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
