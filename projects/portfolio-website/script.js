// Optimized: Event delegation on the <nav> element reduces the number of event listeners and memory footprint.
// The 'defer' attribute in index.html ensures the script runs after the DOM is parsed, making 'DOMContentLoaded' redundant.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link) {
            const targetId = link.getAttribute('href');
            
            // Only handle internal anchor links
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
