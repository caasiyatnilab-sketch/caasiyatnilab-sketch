// Event delegation: use a single listener on the nav element instead of multiple listeners on each link.
// This reduces memory footprint and improves performance, especially if links were to be added dynamically.
// Removed DOMContentLoaded wrapper as the script is now loaded with 'defer' in the head.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');

        // Ensure the clicked element is a link and it's an internal hash link
        if (link && link.getAttribute('href').startsWith('#')) {
            const targetId = link.getAttribute('href');
            
            // Avoid breaking navigation for just '#'
            if (targetId.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Accessibility: shift focus to the target section after a short delay
                    // This ensures screen readers announce the new context.
                    setTimeout(() => {
                        targetSection.focus({ preventScroll: true });
                    }, 500);

                    // Update URL hash without jarring jump
                    history.pushState(null, '', targetId);
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
