(function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            // Focus the section for screen readers, but prevent the browser from
            // jumping instantly so the CSS smooth scroll can handle the animation.
            targetSection.focus({ preventScroll: true });
        }
    });

    console.log('Portfolio website loaded successfully!');
})();
