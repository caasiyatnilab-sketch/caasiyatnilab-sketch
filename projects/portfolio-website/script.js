document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only handle internal links starting with '#'
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Fail securely - log error internally but don't crash
                    console.error('Navigation failed: Invalid selector', error);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});