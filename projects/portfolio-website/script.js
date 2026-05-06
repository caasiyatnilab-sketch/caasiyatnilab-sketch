document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // We let the browser handle the scroll via the default anchor behavior
                    // but we need to manage focus for accessibility.
                    // A small timeout ensures the focus happens after the browser starts its work.
                    setTimeout(() => {
                        targetElement.focus({ preventScroll: true });
                    }, 0);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});