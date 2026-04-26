document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Performance optimization: Using native CSS scroll-behavior: smooth.
            // We only intercept the click to manage focus for accessibility.
            if (targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Small timeout to allow the browser to start the smooth scroll
                    // before moving focus, ensuring a smoother transition for screen readers.
                    setTimeout(() => {
                        targetElement.focus({ preventScroll: true });
                    }, 100);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});