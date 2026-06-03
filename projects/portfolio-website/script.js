document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            // Security: Ensure targetId is a local anchor and not just '#' to prevent potential querySelector abuse or DOMException
            if (!targetId || !targetId.startsWith('#') || targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});