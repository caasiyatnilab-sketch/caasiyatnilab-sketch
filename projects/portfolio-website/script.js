const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only intercept internal hash links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Maintain accessibility by moving focus to the section
                targetSection.focus({ preventScroll: true });
            }
        }
    });
});

console.log('Portfolio website loaded successfully!');