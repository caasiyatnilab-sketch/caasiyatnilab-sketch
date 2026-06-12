'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Security: Validate that targetId is a valid internal anchor to prevent potential selector injection
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (err) {
                    console.error('Invalid selector:', targetId);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
