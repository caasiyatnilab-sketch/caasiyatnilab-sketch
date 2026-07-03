document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal hash links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(href);

                    if (targetSection) {
                        // Smooth scroll to target
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Focus management for accessibility
                        // Set tabindex to -1 so it's focusable via script but not tab order
                        targetSection.setAttribute('tabindex', '-1');
                        targetSection.focus({ preventScroll: true });

                        // Clean up tabindex on blur to keep DOM clean
                        targetSection.addEventListener('blur', () => {
                            targetSection.removeAttribute('tabindex');
                        }, { once: true });

                        // Update URL hash without jumping
                        history.pushState(null, null, href);
                    }
                } catch (error) {
                    console.error('Error navigating to section:', error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
