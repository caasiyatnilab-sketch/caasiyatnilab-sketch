document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Use event delegation to reduce memory overhead and improve performance
    nav?.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');

        // Only handle internal anchor links for smooth scrolling
        if (targetId && targetId.startsWith('#') && targetId !== '#') {
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (err) {
                console.error('Invalid selector:', targetId);
            }
        }
    });
    
    console.log('Portfolio website loaded successfully!');
});