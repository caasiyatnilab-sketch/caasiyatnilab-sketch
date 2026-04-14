document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only handle internal hash links
            if (targetId.startsWith('#')) {
                e.preventDefault();
                try {
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        // Smooth scroll to the target section
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Update URL hash without triggering browser jump
                        history.pushState(null, null, targetId);

                        // Move focus to the section for accessibility, ensuring focus follows movement
                        targetSection.focus({ preventScroll: true });
                    }
                } catch (error) {
                    console.error('Navigation error:', error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});