(function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#') || href.length <= 1) return;

        e.preventDefault();

        try {
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Move focus to the section for screen readers and keyboard users
                targetSection.focus({ preventScroll: true });
            }
        } catch (err) {
            console.error('Navigation error:', err);
        }
    });

    console.log('Portfolio navigation initialized.');
})();
