"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Security: Validate that the targetId is a valid internal anchor starting with '#'
            // and use getElementById to prevent selector injection.
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const id = targetId.slice(1);

                // If id is empty (href="#"), scroll to top/body
                const targetSection = id ? document.getElementById(id) : document.body;

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
