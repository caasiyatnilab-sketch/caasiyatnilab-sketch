document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    // Move focus to the target section after scrolling
                    // We use a small timeout to ensure focus is applied after the transition starts
                    setTimeout(() => {
                        targetSection.focus();
                    }, 500);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
