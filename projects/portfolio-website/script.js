document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            try {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Focus management: move focus to the target section after a short delay
                    // to allow the smooth scroll to start/progress.
                    setTimeout(() => {
                        targetSection.focus();
                    }, 500);
                }
            } catch (error) {
                console.error('Error selecting target section:', error);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});