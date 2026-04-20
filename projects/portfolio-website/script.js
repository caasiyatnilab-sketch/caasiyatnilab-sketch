document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    // Move focus to target for accessibility
                    // Timeout ensures focus follows the visual movement
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                    }, 500);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});