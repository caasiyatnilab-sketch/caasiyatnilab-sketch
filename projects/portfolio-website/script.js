'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const navs = document.querySelectorAll('nav');
    
    navs.forEach(nav => {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link) {
                const targetId = link.getAttribute('href');

                // Validate that targetId is a valid internal anchor to prevent potential selector injection/errors
                if (targetId && targetId.startsWith('#')) {
                    if (targetId === '#') {
                        // Scroll to top for empty anchor
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (targetId.length > 1) {
                        const targetSection = document.querySelector(targetId);

                        if (targetSection) {
                            e.preventDefault();
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});