document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Use event delegation for navigation links
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || !link.getAttribute('href')) return;

        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Check for prefers-reduced-motion
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                targetSection.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                // Programmatically shift focus to the target section
                // Use preventScroll: true to avoid secondary jump after scrollIntoView
                targetSection.focus({ preventScroll: true });
            }
        }
    });
    
    console.log('Portfolio website loaded successfully!');
});