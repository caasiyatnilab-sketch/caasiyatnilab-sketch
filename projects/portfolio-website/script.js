document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');

    if (nav) {
        nav.addEventListener('click', (event) => {
            const link = event.target.closest('a');
            
            // Only handle internal hash links
            if (link && link.getAttribute('href').startsWith('#')) {
                const targetId = link.getAttribute('href');

                // Don't prevent default for the skip link if it's outside nav,
                // but here we are inside nav.
                // For nav links, we want smooth scroll and focus management.
                if (targetId.length > 1) {
                    event.preventDefault();
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Update URL without jump
                        history.pushState(null, '', targetId);

                        // Shift focus after scroll
                        setTimeout(() => {
                            targetSection.focus({ preventScroll: true });
                        }, 500);
                    }
                }
            }
        });
    }

    console.log('Portfolio website loaded successfully!');
});
