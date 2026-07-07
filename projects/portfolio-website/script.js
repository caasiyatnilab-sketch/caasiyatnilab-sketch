performance.mark('script-execution-start');

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Event delegation for navigation links
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Only handle internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(href);

                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Accessibility: Move focus to the section after scrolling
                        // Using setTimeout to ensure the scroll has started/happened
                        setTimeout(() => {
                            targetSection.focus();
                        }, 500);
                    }
                } catch (error) {
                    console.error('Error selecting target section:', error);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
