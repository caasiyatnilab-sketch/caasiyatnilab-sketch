'use strict';

/**
 * Portfolio Website Script
 *
 * Performance optimizations:
 * 1. Uses event delegation on the nav element to reduce memory footprint.
 * 2. Offloads smooth scrolling to native CSS.
 * 3. Handles focus management for accessibility after navigation.
 */

const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        const href = link?.getAttribute('href');

        if (link && href && href.startsWith('#')) {
            const targetId = href;
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // We let the native CSS handle the smooth scroll.
                // We only need to manage focus for accessibility.
                // We use a small timeout to ensure the focus is moved after the scroll starts
                // or completes, improving the experience for screen reader users.
                setTimeout(() => {
                    targetSection.setAttribute('tabindex', '-1');
                    targetSection.focus({ preventScroll: true });
                }, 800); // 800ms is usually enough for the smooth scroll to reach near target
            }
        }
    });
}

console.log('Portfolio website optimized and loaded.');
