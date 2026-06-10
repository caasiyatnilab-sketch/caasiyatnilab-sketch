document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Security: Only handle internal anchor links starting with '#'
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (err) {
                    console.error('Navigation error:', err);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});