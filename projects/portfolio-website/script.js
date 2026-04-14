document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only intercept internal hash links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Fail securely by not crashing and logging a generic error if needed
                    console.error('Navigation error occurred');
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});