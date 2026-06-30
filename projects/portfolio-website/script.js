document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const skipLink = document.querySelector('.skip-link');

    // Smooth scroll with focus management
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Check if user prefers reduced motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            targetSection.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });

            // Focus management for accessibility
            targetSection.setAttribute('tabindex', '-1');
            targetSection.focus({ preventScroll: true });
        }
    }

    navLinks.forEach(link => link.addEventListener('click', smoothScroll));
    if (skipLink) skipLink.addEventListener('click', smoothScroll);

    // ScrollSpy implementation
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
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

    console.log('Portfolio website loaded with enhanced UX!');
});