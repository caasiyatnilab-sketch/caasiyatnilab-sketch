(function() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link) {
                const targetId = link.getAttribute('href');

                // Security/Robustness: Ensure the selector is a valid internal link and not just "#" or empty
                if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                    e.preventDefault();
                    try {
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                            // Accessibility: Move focus to the section, keeping it synced with visual scroll
                            targetSection.focus({ preventScroll: true });
                        }
                    } catch (err) {
                        // Fail securely: Log error for developers but don't crash the script
                        console.error('Navigation error:', err);
                    }
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
})();
