document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Focus the target element after a short delay to ensure
                // smooth scroll doesn't interfere with focus placement
                setTimeout(() => {
                    targetElement.focus({ preventScroll: true });
                }, 800); // 800ms is a safe bet for most smooth scrolls
            }
        });
    });
    
    console.log('Portfolio website loaded with accessible navigation!');
});