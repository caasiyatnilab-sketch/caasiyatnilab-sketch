document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only intercept internal hash links
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Performance: Using native CSS 'scroll-behavior: smooth' via location.hash
                    // This offloads the scroll animation to the browser's compositor thread.
                    window.location.hash = targetId;

                    // Accessibility: Programmatically move focus to the target section.
                    // We use a small timeout to ensure the focus transition doesn't interrupt the scroll.
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                    }, 10);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully with performance optimizations!');
});