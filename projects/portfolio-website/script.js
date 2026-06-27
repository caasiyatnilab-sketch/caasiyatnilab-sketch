document.addEventListener('DOMContentLoaded', function() {
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Update focus for accessibility
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus({ preventScroll: true });

                // Update URL hash
                history.pushState(null, null, targetId);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});