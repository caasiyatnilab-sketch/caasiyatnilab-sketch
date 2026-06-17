document.addEventListener('DOMContentLoaded', function() {
    // Performance optimization: Using event delegation on the nav element
    // instead of attaching multiple event listeners to individual links.
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                // Performance optimization: document.getElementById is faster than
                // document.querySelector for ID-based navigation lookups.
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});