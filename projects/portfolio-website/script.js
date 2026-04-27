document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Move focus to target element for accessibility
                setTimeout(() => {
                    targetElement.focus({ preventScroll: true });
                }, 100);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});