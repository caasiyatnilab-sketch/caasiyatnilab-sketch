document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Focus the section after a short delay to allow scrolling to start
                // and ensure screen readers announce the transition correctly.
                setTimeout(() => {
                    targetSection.focus();
                }, 500);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});