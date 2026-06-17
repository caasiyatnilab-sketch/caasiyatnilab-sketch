document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Validate that the targetId is a valid internal hash link
            // to prevent DOMException from invalid selectors and handle external links gracefully
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});