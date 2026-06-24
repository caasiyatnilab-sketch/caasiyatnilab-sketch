document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const updateActiveLink = (id) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateActiveLink(entry.target.getAttribute('id'));
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Provide immediate feedback on click while smooth scroll happens via CSS
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const id = this.getAttribute('href').substring(1);
            updateActiveLink(id);
        });
    });

    console.log('Portfolio website loaded successfully with Scroll-Spy!');
});
