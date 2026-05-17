(function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
            const targetSection = document.querySelector(href);
            if (targetSection) {
                // Focus management for accessibility during smooth scroll
                targetSection.focus({ preventScroll: true });
            }
        }
    });

    console.log('Portfolio website loaded successfully!');
})();
