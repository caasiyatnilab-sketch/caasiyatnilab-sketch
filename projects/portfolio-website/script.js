document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only manage smooth scroll and focus for internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Focus the target section after the scroll starts/completes
                    // for better screen reader and keyboard navigation
                    setTimeout(() => {
                        targetSection.focus();
                    }, 500);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});