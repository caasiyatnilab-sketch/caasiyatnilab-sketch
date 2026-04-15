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

                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);

                    // Focus target for accessibility
                    targetSection.focus({ preventScroll: true });
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});