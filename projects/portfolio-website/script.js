document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links starting with '#'
            if (href && href.startsWith('#')) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Focus the section to improve keyboard navigation
                        // This ensures that pressing Tab after clicking will move
                        // focus to the next element within the section.
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