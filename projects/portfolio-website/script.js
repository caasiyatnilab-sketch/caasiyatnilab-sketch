document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Update URL hash without jump and move focus for accessibility
                    history.pushState(null, null, href);
                    targetSection.focus();
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});