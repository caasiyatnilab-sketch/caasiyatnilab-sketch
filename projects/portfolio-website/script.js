const nav = document.querySelector('nav');

// Optimization: Use event delegation on the nav container to reduce memory usage and initialization time.
// Since the script is loaded with 'defer', it executes after DOM parsing, making DOMContentLoaded redundant.
if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (error) {
                console.error('Invalid selector:', targetId, error);
            }
        }
    });
}

console.log('Portfolio website initialized successfully!');
