document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            try {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Focus management after smooth scroll
                    // A small delay ensures the transition is underway or completed
                    setTimeout(() => {
                        targetSection.focus();
                    }, 500);
                }
            } catch (error) {
                console.error('Invalid selector:', targetId, error);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});