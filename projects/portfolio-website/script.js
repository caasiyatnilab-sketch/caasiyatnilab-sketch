'use strict';

/**
 * Performance optimization:
 * 1. Used event delegation on the nav element instead of attaching listeners to each link.
 * 2. Removed DOMContentLoaded wrapper as the script is now loaded with 'defer'.
 * 3. Added basic validation for internal anchor links.
 */

const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');

        // Only handle internal links that are not just '#'
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}
