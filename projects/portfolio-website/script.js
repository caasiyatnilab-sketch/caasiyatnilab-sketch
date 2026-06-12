'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    /**
     * Smooth scroll to target section and manage focus
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Set focus to the target section after a short delay for accessibility
                // Use tabindex="-1" to make it focusable via script if not already
                if (!targetSection.hasAttribute('tabindex')) {
                    targetSection.setAttribute('tabindex', '-1');
                }

                // Wait for the scroll to finish roughly
                setTimeout(() => {
                    targetSection.focus({ preventScroll: true });
                }, 800);
            }
        });
    });

    /**
     * Highlight active navigation link based on scroll position
     */
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    const href = link.getAttribute('href').substring(1);
                    if (href === id) {
                        link.classList.add('active');
                        link.setAttribute('aria-current', 'page');
                    } else {
                        link.classList.remove('active');
                        link.removeAttribute('aria-current');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
    
    console.log('Portfolio website loaded successfully with enhanced UX!');
});
