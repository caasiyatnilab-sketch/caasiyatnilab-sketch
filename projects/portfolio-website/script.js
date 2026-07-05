performance.mark('script-execution-start');

// Cache navigation element for event delegation
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        // Find the nearest anchor element
        const link = e.target.closest('a');

        if (link) {
            const href = link.getAttribute('href');
            
            // Only handle internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');

performance.measure('bolt-script-init', 'script-execution-start');
