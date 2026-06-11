document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Using event delegation on the nav element to optimize memory usage and initial load performance
    // Instead of attaching a listener to each link, we use a single listener on the parent.
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');
        // Only handle local anchor links
        if (targetId && targetId.startsWith('#') && targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    
    console.log('Portfolio website loaded successfully!');
});