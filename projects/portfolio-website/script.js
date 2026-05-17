(function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    /**
     * Refactored for performance:
     * 1. Used event delegation on the <nav> element instead of adding listeners to each <a>.
     * 2. Offloaded smooth scrolling to CSS (native compositor thread) for better frame rates.
     * 3. Kept JS only for focus management to ensure accessibility.
     */
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
            const targetSection = document.querySelector(href);
            if (targetSection) {
                // Focus the section for screen readers.
                // preventScroll: true is used because the browser handles the scroll via CSS.
                targetSection.focus({ preventScroll: true });
            }
        }
    });

    console.log('Portfolio website loaded successfully!');
})();