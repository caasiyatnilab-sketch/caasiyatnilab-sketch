const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            // Move focus to the target section for accessibility
            targetSection.focus();

            // Update URL hash without jumping
            history.pushState(null, null, targetId);
        }
    });
});

console.log('Portfolio website loaded successfully!');