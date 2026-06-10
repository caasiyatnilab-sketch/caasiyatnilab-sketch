document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Move focus to the section after scrolling
                // We use a small delay to ensure the scroll has started/is in progress
                // before shifting focus, which helps screen readers.
                setTimeout(() => {
                    targetSection.focus({ preventScroll: true });
                }, 800);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});