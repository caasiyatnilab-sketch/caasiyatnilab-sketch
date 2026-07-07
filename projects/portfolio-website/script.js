document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    // Smooth scrolling with focus management
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Set focus to the section for screen readers
                targetSection.focus();
            }
        });
    });

    // Intersection Observer for highlighting active nav link
    const observerOptions = {
        root: null,
        rootMargin: '-150px 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    
    console.log('Portfolio website loaded with UX enhancements!');
});
