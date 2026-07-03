document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Security & Robustness: Ensure targetId is a valid internal hash selector
            // and wrap in try...catch to prevent script termination on malformed selectors.
            if (targetId && targetId.startsWith('#')) {
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        e.preventDefault();
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    console.error('Invalid selector:', targetId, error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});