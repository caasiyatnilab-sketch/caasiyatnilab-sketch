'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Performance: Use event delegation to reduce the number of event listeners
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const targetId = link.getAttribute('href');
            
            // Safety check: Ensure it's a valid internal anchor link
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
