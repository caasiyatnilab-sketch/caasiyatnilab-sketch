document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal hash links
            if (href.startsWith('#')) {
                e.preventDefault();
                try {
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                        // Move focus to the target for accessibility
                        targetSection.focus();
                    }
                } catch (error) {
                    console.error('Error navigating to section:', error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});