document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Security: Ensure the href is a valid local anchor and handle potential selector errors
            if (targetId && targetId.startsWith('#')) {
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Silently fail if the selector is invalid to prevent script termination
                    console.error('Invalid navigation target:', targetId);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});