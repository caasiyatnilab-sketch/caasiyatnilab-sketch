document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Use event delegation on the nav container for better performance
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link || !link.getAttribute('href').startsWith('#')) return;

            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Check if user prefers reduced motion
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                targetSection.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                // Shift focus to the section for screen readers
                // preventScroll: true ensures the browser doesn't double-scroll
                targetSection.focus({ preventScroll: true });
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});