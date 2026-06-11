document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Set focus to the target section after a small delay to allow for scrolling
                // and ensuring screen readers announce the new section
                setTimeout(() => {
                    targetSection.focus();
                }, 500);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});