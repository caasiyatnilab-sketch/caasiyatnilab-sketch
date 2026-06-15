'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Smooth scroll and focus management using event delegation
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.focus();
        } else {
            const targetSection = document.getElementById(href.substring(1));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Focus management for accessibility
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus({ preventScroll: true });
            }
        }
    });

    // Active link highlighting using IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    console.log('Portfolio website loaded successfully!');
});
