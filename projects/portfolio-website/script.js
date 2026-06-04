document.addEventListener('DOMContentLoaded', function() {
    // Performance: Use event delegation on the nav element to reduce memory usage
    // by attaching a single event listener instead of one per link.
    const nav = document.getElementById('main-nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');

            // Validation: Ensure the clicked element is a link and has a valid local hash
            if (!link || !link.getAttribute('href') || !link.getAttribute('href').startsWith('#')) {
                return;
            }

            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            try {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Smooth scrolling to the target section
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Accessibility/UX: Shift focus to the target section after scrolling
                    // setTimeout allows the scroll animation to progress before focusing.
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                    }, 500);
                }
            } catch (error) {
                console.error('Failed to navigate to section:', error);
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
