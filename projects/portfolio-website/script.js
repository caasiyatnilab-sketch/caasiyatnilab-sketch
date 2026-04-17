document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default and handle scrolling if it's an internal hash link
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    console.error('Navigation error:', error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});