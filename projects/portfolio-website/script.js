document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only handle internal links
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);

                    // Scroll to section
                    targetSection.scrollIntoView({
                        behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
                    });

                    // Ensure focus moves to the target section for screen readers
                    // We use a small timeout to allow scrolling to start/finish in some browsers
                    // although technically focus can be moved immediately.
                    targetSection.focus({ preventScroll: true });
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
