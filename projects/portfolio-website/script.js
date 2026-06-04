document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || !targetId.startsWith('#')) return;

            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Move focus to the target section after scroll
                // Using a small timeout to ensure scroll has started/happened
                setTimeout(() => {
                    targetSection.focus({ preventScroll: true });
                }, 500);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});