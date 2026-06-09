document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    function navigateToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, null, targetId);
            // Wait for smooth scroll to finish before focusing
            setTimeout(() => {
                targetSection.focus({ preventScroll: true });
            }, 800);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection(this.getAttribute('href'));
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
