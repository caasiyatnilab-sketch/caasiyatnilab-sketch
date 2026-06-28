document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = targetId === 'main-content' ?
                    document.getElementById('main-content') :
                    document.querySelector(href);

                if (targetElement) {
                    // Smooth scroll to target
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    // Update URL hash without jumping
                    history.pushState(null, '', href);

                    // Focus management: wait for scroll to finish then focus
                    setTimeout(() => {
                        targetElement.focus();
                        // If focus failed (e.g. element not focusable),
                        // make sure it has tabindex -1 and try again
                        if (document.activeElement !== targetElement) {
                            targetElement.setAttribute('tabindex', '-1');
                            targetElement.focus();
                        }
                    }, 800); // Wait for smooth scroll
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
