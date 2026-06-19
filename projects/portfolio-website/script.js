// Optimized: Using event delegation on the <nav> element to reduce memory usage and improve performance.
// The 'defer' attribute in index.html ensures this script runs after the DOM is parsed.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', (e) => {
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
                }
            } catch (err) {
                console.error('Invalid selector:', href);
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
