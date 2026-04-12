document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only intercept internal hash links
            if (href.startsWith('#')) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(href);

                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Update URL hash without jumping
                        history.pushState(null, null, href);

                        // Move focus to target section for assistive technology
                        targetSection.focus({ preventScroll: true });
                    }
                } catch (error) {
                    console.error('Error navigating to section:', error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});