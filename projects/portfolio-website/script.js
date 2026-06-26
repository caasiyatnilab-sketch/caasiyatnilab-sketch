document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Event delegation for navigation links
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Only handle internal hash links
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                // Smooth scroll to target
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Update URL hash without jarring jump
                history.pushState(null, '', href);

                // Shift focus to target after scroll completes for accessibility
                // A 500ms delay ensures the scroll is sufficiently advanced
                setTimeout(() => {
                    targetSection.focus({ preventScroll: true });
                }, 500);
            }
        }
    });
    
    console.log('Portfolio website loaded successfully!');
});