document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    // Smooth scroll is now handled by CSS (scroll-behavior: smooth)
    // We still use JS to manage the active state of navigation links

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveLink(id);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    function updateActiveLink(id) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Provide immediate feedback on click
            const id = this.getAttribute('href').substring(1);
            updateActiveLink(id);
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});