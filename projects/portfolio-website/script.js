document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                targetSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                targetSection.focus({ preventScroll: true });
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});