document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Programmatic focus management for accessibility
                        // 500ms matches common smooth scroll durations
                        setTimeout(() => {
                            targetSection.focus();
                        }, 500);
                    }
                } catch (error) {
                    console.error('Error selecting target section:', error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});