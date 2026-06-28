document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    // Smooth scroll and focus management
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Manage focus: make section focusable and focus it
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus({ preventScroll: true });

                // Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // ScrollSpy: highlight nav link based on intersection ratio
    const observerOptions = {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
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
    
    console.log('Portfolio website enhanced with ScrollSpy and focus management!');
});
