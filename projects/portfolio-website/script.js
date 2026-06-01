document.addEventListener('DOMContentLoaded', function() {
    // Optimization: Use event delegation on the <nav> element to handle all navigation link clicks.
    // This reduces the number of event listeners, improving memory efficiency and performance.
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            
            // Ensure the clicked element is a link and has an 'href' attribute.
            if (!link || !link.getAttribute('href')) return;

            const targetId = link.getAttribute('href');

            // Only handle internal links starting with '#'.
            if (targetId.startsWith('#')) {
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