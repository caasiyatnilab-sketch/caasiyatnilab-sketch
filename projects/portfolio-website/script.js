'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Validate that the targetId is a valid internal anchor to prevent selector injection
            // It must start with '#' and be followed by valid ID characters
            if (targetId && targetId.startsWith('#') && /^#[a-zA-Z0-9\-_]*$/.test(targetId)) {
                try {
                    const targetSection = targetId === '#' ? document.body : document.querySelector(targetId);

                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    console.error('Invalid selector:', targetId);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});