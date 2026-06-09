document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        // Event delegation: attach a single listener to the nav element
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;
            
            const targetId = link.getAttribute('href');

            // Safety check for targetId and hash links
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (error) {
                    console.error('Invalid selector:', targetId);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});