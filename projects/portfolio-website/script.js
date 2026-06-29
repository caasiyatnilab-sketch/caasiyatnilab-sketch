document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Update URL hash without jump
                    history.pushState(null, '', targetId);

                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Focus management: wait for scroll to be somewhat underway
                    setTimeout(() => {
                        targetSection.focus();
                    }, 500);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});
