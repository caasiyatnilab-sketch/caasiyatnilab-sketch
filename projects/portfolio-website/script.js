document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Fail gracefully if targetId is not a valid selector
                    console.error('Invalid scroll target:', targetId);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});