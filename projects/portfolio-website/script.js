// Implementing event delegation on the nav element for better performance
// This reduces the number of event listeners from N to 1
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');

        // Defensive check: only handle internal hash links
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            e.preventDefault();
            
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Smooth scroll to target
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Update URL hash without jarring jump
                    history.pushState(null, '', targetId);
                }
            } catch (error) {
                console.error('Invalid selector:', targetId, error);
            }
        }
    });
}

console.log('Portfolio website script initialized with event delegation.');
