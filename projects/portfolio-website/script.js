'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Using event delegation to optimize event handling.
    // Instead of attaching a listener to each anchor tag, we use one on the nav element.
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');

        // Ensure the target is an internal link.
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Focus management for accessibility: set focus to the target section.
                // We set tabindex to -1 so it's focusable via script but doesn't change tab order.
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus();
            }
        }
    });
});
