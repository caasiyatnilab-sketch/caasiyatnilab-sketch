// Optimize navigation with event delegation to improve memory efficiency
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            // Use event delegation to handle clicks on anchor tags
            const link = e.target.closest('a');
            if (!link) return;
            
            const targetId = link.getAttribute('href');
            // Only handle internal links
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
