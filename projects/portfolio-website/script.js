(function() {
    const nav = document.querySelector('nav');
    if (nav) {
        // Use event delegation on the nav container to reduce initialization time and memory usage
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            // Ensure the link is internal and valid before proceeding
            if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('#') && link.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (err) {
                    console.error('Invalid selector:', targetId, err);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
})();