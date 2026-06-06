document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();

                    // Respect reduced motion preferences
                    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                    targetSection.scrollIntoView({
                        behavior: shouldReduceMotion ? 'auto' : 'smooth'
                    });

                    // Shift focus to the section for keyboard accessibility
                    // We use a timeout to ensure the scroll has started/finished
                    // and prevent the browser from jumping to focus immediately
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                    }, 500);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});