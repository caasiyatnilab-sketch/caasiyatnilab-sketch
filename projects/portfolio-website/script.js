document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .skip-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Programmatically focus the target section to ensure keyboard/screen reader focus follows
                // We use a small timeout to allow the smooth scroll to begin/happen
                setTimeout(() => {
                    targetSection.focus({ preventScroll: true });
                }, 100);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});