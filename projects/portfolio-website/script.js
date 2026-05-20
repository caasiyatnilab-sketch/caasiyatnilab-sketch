document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Security: Ensure the link is an internal anchor and not empty
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Fail securely: Log the error internally and avoid crashing
                    console.error('Error navigating to section:', error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});