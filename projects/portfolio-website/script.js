document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length < 2) return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Move focus to the target element after a short delay for a11y
                setTimeout(() => {
                    targetElement.focus({ preventScroll: true });
                }, 100);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});