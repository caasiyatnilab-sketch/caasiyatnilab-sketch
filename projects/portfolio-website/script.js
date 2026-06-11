document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const targetId = link.getAttribute('href');
            
            // Security: Validate that the targetId is a valid local anchor link
            // to prevent potential crashes from malformed selectors or external links.
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    // Fail securely: Log the error and prevent application crash
                    console.error('Navigation error:', error);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
