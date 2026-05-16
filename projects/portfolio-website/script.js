(function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#') || href === '#') return;

        const targetSection = document.querySelector(href);
        if (targetSection) {
            targetSection.focus({ preventScroll: true });
        }
    });

    console.log('Portfolio website initialized with accessible navigation.');
})();