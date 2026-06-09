document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const targetId = link.getAttribute('href');
            if (!targetId || !targetId.startsWith('#') || targetId === '#') return;

            e.preventDefault();
            
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Focus management: move focus to the section after scroll
                    // A small timeout ensures the scroll animation has progressed
                    setTimeout(() => {
                        targetSection.focus();
                    }, 600);
                }
            } catch (error) {
                console.error('Error selecting target section:', error);
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
