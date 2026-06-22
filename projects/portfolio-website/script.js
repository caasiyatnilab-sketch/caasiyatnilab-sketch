document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        // Event delegation: attach a single listener to the nav element.
        // This reduces memory usage and improves initialization performance by avoiding
        // attaching individual listeners to every navigation link.
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Only handle internal hash links to avoid breaking external navigation.
            if (href && href.startsWith('#') && href.length > 1) {
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
