document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        // Use event delegation for better performance and robustness
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Only handle internal hash links
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Update URL hash without jumping
                        window.history.pushState(null, '', href);
                    }
                } catch (error) {
                    // Fail securely: log error internally but don't crash or expose details to user
                    console.error('Navigation error:', error.message);
                }
            }
        });
    }
    
    // Security Note: Content Security Policy (CSP) is implemented in the HTML meta tag
    // to provide defense-in-depth against XSS and other injection attacks.
    console.log('Portfolio website loaded successfully!');
});
