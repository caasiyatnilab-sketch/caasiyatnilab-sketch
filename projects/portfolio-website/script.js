document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Validate that the href is an internal hash link to prevent errors or unexpected behavior
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Log error but fail securely without breaking other scripts
                    console.error('Invalid selector:', targetId);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});