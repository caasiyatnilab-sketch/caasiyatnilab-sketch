document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Set focus to the target section after scrolling to ensure keyboard/screen reader focus follows
                // We use a slight delay or wait for the transition to finish if possible,
                // but since scrollIntoView doesn't return a promise, we focus immediately or with a short timeout.
                targetSection.focus({ preventScroll: true });

                // Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});