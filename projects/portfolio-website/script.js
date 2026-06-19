document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links starting with '#'
            if (href && href.startsWith('#')) {
                e.preventDefault();

                // Sanitize targetId to ensure it's a valid selector and prevent potential errors
                try {
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    console.error('Invalid navigation target:', href);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});