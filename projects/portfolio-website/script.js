document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    // Focus management: move focus to the section for keyboard/screen reader users
                    // Wait for the scroll to finish or at least start
                    setTimeout(() => {
                        targetSection.focus();
                    }, 500);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});