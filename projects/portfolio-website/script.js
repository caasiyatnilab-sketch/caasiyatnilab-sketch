document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Defensive check: Ensure the href is an internal ID selector and not just '#'
            // This prevents DOMException when calling querySelector with '#'
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
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