document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Security: Only handle internal hash links to prevent unexpected navigation
            // or potential script injection if href is dynamically generated.
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();

                try {
                    // Defensive coding: querySelector can throw DOMException for invalid selectors.
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Fail securely: Log the error for developers but don't crash the script.
                    console.error('Invalid navigation target:', href);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});