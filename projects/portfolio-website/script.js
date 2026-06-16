'use strict';

// Note: When using 'defer' in the script tag, the script executes after the DOM is parsed
// so a DOMContentLoaded listener is technically redundant, but kept for robust initialization
// or in case the defer attribute is removed.

const nav = document.querySelector('nav');

// Using event delegation on the <nav> element to reduce memory usage and setup time
nav.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    
    // Ensure it's an internal anchor link
    if (href && href.startsWith('#')) {
        e.preventDefault();

        // Fast lookup using getElementById (stripping the #)
        const targetId = href.slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Programmatic focus management for accessibility and keyboard navigation flow
            targetSection.setAttribute('tabindex', '-1');
            targetSection.focus({ preventScroll: true });
        }
    }
});

console.log('Portfolio website loaded successfully!');
