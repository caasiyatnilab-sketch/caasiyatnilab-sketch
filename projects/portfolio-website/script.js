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
                    // Move focus to the section after scrolling starts
                    // setTimeout gives a small buffer for the scroll to initiate
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                    }, 100);
                }
            } catch (err) {
                console.error('Invalid selector:', targetId);
            }
        });
    });

    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    target.focus({ preventScroll: true });
                }, 100);
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});