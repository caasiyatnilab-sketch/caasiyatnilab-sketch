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
            targetSection.focus({ preventScroll: true });
        }
    });
})();