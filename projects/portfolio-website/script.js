document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Security/Defensive: Ensure the href is a valid internal hash link
            // to prevent potential DOMException from invalid selectors.
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        e.preventDefault();
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (err) {
                    console.error('Invalid selector:', targetId, err);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});