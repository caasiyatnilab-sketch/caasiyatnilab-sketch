document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || !link.getAttribute('href') || link.getAttribute('href') === '#') return;

        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                targetSection.focus();
                history.pushState(null, null, targetId);
            }
        }
    });
    
    console.log('Portfolio website loaded successfully!');
});