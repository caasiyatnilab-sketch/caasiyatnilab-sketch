document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Security: Basic input validation to ensure the selector is an ID
            if (targetId && targetId.startsWith('#')) {
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    console.error('Invalid selector:', targetId);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});