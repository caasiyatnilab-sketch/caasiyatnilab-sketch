document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const skipLink = document.querySelector('.skip-link');

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle skip link focus management
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        });
    }

    // Smooth scroll with focus management for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    // Update URL without jump
                    history.pushState(null, null, targetId);

                    // Scroll logic respecting prefers-reduced-motion
                    window.scrollTo({
                        top: targetSection.offsetTop - headerHeight,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });

                    // Focus management for accessibility
                    targetSection.setAttribute('tabindex', '-1');
                    targetSection.focus({ preventScroll: true });
                }
            }
        });
    });

    // ScrollSpy using IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // Fallback for when we're at the very top
    window.addEventListener('scroll', () => {
        if (window.scrollY < 50) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#about');
            });
        }
    });
});