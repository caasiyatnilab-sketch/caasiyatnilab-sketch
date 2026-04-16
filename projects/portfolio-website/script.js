document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href && href.startsWith('#')) {
                try {
                    const targetSection = document.querySelector(href);

                    if (targetSection) {
                        e.preventDefault();
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Update URL hash without jumping
                        history.pushState(null, null, href);

                        // Move focus to target section for accessibility
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