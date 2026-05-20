document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                        targetSection.scrollIntoView({
                            behavior: prefersReducedMotion ? 'auto' : 'smooth'
                        });
                        targetSection.focus({ preventScroll: true });
                    }
                } catch (error) {
                    console.error('Invalid selector:', targetId);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});