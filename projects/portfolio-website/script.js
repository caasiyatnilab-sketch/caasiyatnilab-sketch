document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;
            
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);

                    // Focus the target section for accessibility
                    targetSection.focus({ preventScroll: true });
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});