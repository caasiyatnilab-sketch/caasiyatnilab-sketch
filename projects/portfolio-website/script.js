document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Use event delegation on the <nav> element for efficiency
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link || !link.getAttribute('href') || !link.getAttribute('href').startsWith('#')) return;

            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Check if user prefers reduced motion
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                targetSection.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                // Programmatically shift focus to the section for screen readers and keyboard users
                // Use preventScroll to avoid secondary scroll jump
                targetSection.focus({ preventScroll: true });
            }
        });
    }

    // Handle skip-link separately
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector('#about');
            if (targetSection) {
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                targetSection.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
                targetSection.focus({ preventScroll: true });
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
