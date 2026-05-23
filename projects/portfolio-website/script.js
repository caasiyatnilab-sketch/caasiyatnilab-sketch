// Optimization: Use event delegation on the nav container to handle all link clicks.
// This reduces memory usage and improves performance by avoiding multiple individual event listeners.
const nav = document.querySelector('nav');
if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        // Only process internal anchor links starting with '#'
        if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('#') && link.getAttribute('href').length > 1) {
            const targetId = link.getAttribute('href');
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (err) {
                console.error('Invalid selector:', targetId, err);
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');