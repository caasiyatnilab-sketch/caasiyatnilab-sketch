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

                    // Accessibility: Move focus to the target section after scrolling
                    // Using setTimeout to ensure the section is focused after animation starts/completes
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
