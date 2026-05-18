(function() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;
            
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    targetSection.focus({ preventScroll: true });
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
})();
