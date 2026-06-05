document.addEventListener('DOMContentLoaded', function() {
    /**
     * Performance Optimization: Event Delegation
     * Instead of attaching individual event listeners to every navigation link,
     * we attach a single listener to the <nav> element. This reduces memory
     * usage and improves performance, especially as the number of links grows.
     */
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            // Find the closest anchor tag from the click target
            const link = e.target.closest('a');

            // Only handle local anchor links
            if (!link) return;

            const targetId = link.getAttribute('href');
            if (!targetId || !targetId.startsWith('#') || targetId === '#') return;

            e.preventDefault();
            
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (error) {
                // Handle potentially malformed hashes or invalid selectors gracefully
                console.error('Smooth scroll failed:', error);
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
