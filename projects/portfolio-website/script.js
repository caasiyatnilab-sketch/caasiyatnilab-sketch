// Event delegation on the <nav> element reduces listener count and memory footprint,
// while avoiding redundant 'DOMContentLoaded' when using 'defer' script loading.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');

        // Only handle internal hash links for smooth scrolling
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            e.preventDefault();
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (error) {
                console.error('Smooth scroll failed:', error);
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
