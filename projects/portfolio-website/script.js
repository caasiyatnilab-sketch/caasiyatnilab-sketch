document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Use event delegation for navigation links
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Focus management for accessibility
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Set focus to the section after scrolling
                // We use a timeout to wait for the scroll to start/finish and ensure focus works correctly
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus({ preventScroll: true });

                // Update URL without jump
                history.pushState(null, null, targetId);
            }
        }
    });

    // Also handle skip link focus management
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, null, targetId);
            }
        });
    }
    
    console.log('Portfolio website loaded successfully with enhanced UX!');
});