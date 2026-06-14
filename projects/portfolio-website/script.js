'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Security: Ensure href is a valid internal anchor before processing
            if (!href || !href.startsWith('#')) {
                return;
            }

            e.preventDefault();

            // Handle scroll-to-top specifically
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // Security: Use getElementById to prevent DOM-based selector injection
            const id = href.substring(1);
            const targetSection = document.getElementById(id);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Accessibility: focus management for smooth scrolling
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus({ preventScroll: true });
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});