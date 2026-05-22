const navLinks = document.querySelectorAll('nav a, .skip-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || !href.startsWith('#') || href.length <= 1) return;

        e.preventDefault();
        const targetSection = document.querySelector(href);

        if (targetSection) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            targetSection.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });

            // Maintain accessibility by moving focus to the target section
            targetSection.focus({ preventScroll: true });
        }
    });
});

console.log('Portfolio website loaded successfully!');
