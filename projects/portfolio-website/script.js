// Optimized with event delegation and faster DOM lookups
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        // Only handle clicks on anchor tags
        const link = e.target.closest('a');

        if (link) {
            const href = link.getAttribute('href');
            
            // Only handle internal hash links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                // document.getElementById is faster than querySelector
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
