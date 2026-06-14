"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');

            // Validate that the href is a valid internal anchor
            if (!href || !href.startsWith('#')) return;

            e.preventDefault();
            
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.body.focus();
                return;
            }

            // Prevent DOM-based selector injection by ensuring href is a simple ID selector
            if (!/^#[a-zA-Z0-9_-]+$/.test(href)) return;

            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Focus management for keyboard and screen reader users
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus({ preventScroll: true });
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
