document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Shift focus to the target section after scrolling
                // preventScroll: true is used to avoid interfering with the smooth scroll
                targetSection.focus({ preventScroll: true });
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});