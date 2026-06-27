// Optimization: Use event delegation on the <nav> element to handle all link clicks with a single listener.
// This reduces memory overhead by avoiding multiple event listeners for each individual link.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        // Target the closest anchor tag to handle clicks even if they land on nested elements
        const link = e.target.closest('a');

        if (link && link.getAttribute('href')?.startsWith('#')) {
            const targetId = link.getAttribute('href');
            
            // Only handle internal links that are more than just '#'
            if (targetId.length > 1) {
                e.preventDefault();
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (err) {
                    // Fail gracefully if targetId is not a valid selector
                    console.warn(`Could not scroll to section: ${targetId}`, err);
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
