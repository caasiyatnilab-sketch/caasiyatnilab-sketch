document.addEventListener('DOMContentLoaded', function() {
    // Native CSS smooth scrolling is enabled in styles.css.
    // We add focus management for internal links to ensure accessibility.
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('href');
            
            // Avoid errors with empty hash or just '#'
            if (targetId.length < 2) return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Focus the target element to help screen readers and keyboard users
                // setTimeout allows the browser to start the scroll before moving focus
                setTimeout(() => {
                    targetElement.focus({ preventScroll: true });
                }, 100);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully with improved accessibility!');
});