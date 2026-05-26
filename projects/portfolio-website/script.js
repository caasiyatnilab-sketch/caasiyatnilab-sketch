// Optimized: Event delegation on 'nav' reduces memory usage and initialization time.
// Using 'defer' in HTML makes 'DOMContentLoaded' listener redundant.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Only handle valid internal anchor links
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            
            try {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (error) {
                console.warn('Invalid selector in navigation:', error);
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
