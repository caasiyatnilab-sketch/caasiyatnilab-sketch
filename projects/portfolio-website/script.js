document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a, .skip-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => target.focus({ preventScroll: true }), 500);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});