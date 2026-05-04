const navLinks = document.querySelectorAll('nav a, .skip-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Update URL without jump
                history.pushState(null, null, targetId);

                // Native smooth scroll via CSS
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Move focus for accessibility
                targetElement.focus({ preventScroll: true });
            }
        }
    });
});

console.log('Portfolio website loaded successfully!');