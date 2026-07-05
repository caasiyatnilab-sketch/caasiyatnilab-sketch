document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Let the browser handle smooth scrolling via CSS scroll-behavior
                    // We just need to manage focus for accessibility
                    targetSection.setAttribute('tabindex', '-1');
                    targetSection.focus();
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
