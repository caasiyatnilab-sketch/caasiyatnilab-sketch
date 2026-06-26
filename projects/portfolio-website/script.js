document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // SECURITY: Validate that the href is an internal hash link and not just '#'
            // This prevents the script from attempting to process external links or invalid selectors
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // SECURITY: Fail securely by catching potential DOMException from invalid selectors
                    // and log a generic message without exposing internal details
                    console.error('Navigation error occurred.');
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});