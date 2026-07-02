document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Use event delegation for improved performance and reduced memory overhead
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Only process internal hash links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            
            try {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    // Smooth scroll is handled by CSS, but we can still use JS for fallbacks or extra logic
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (error) {
                console.error('Invalid selector:', error);
            }
        }
    });
    
    console.log('Portfolio website loaded successfully!');
});
