const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');

        if (link && link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            // Allow '#' for top of page or check for valid selector
            if (targetId.length > 1) {
                try {
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        // Smooth scroll to the target section
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Update URL hash without jarring jump
                        history.pushState(null, '', targetId);

                        // Focus management: wait for scroll to be mostly complete
                        setTimeout(() => {
                            targetSection.focus();
                        }, 500);
                    }
                } catch (err) {
                    console.error('Invalid selector:', targetId);
                }
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');