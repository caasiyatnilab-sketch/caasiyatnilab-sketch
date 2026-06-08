document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Native CSS handles the smooth scroll.
            // We only need to manage focus for accessibility.
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Wait for the native smooth scroll animation to finish before moving focus
                setTimeout(() => {
                    targetSection.focus({ preventScroll: true });
                }, 800);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
