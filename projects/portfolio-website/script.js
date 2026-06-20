document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            const targetId = link.getAttribute('href');
            if (!targetId || !targetId.startsWith('#') || targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();

                // Smooth scroll to the target
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Update URL without jumping
                history.pushState(null, '', targetId);

                // Manage focus for accessibility
                // Use a delay to ensure scroll is underway and avoid jumpy behavior
                // preventScroll: true is critical when manually managing focus after smooth scroll
                setTimeout(() => {
                    targetSection.focus({ preventScroll: true });
                }, 500);
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
