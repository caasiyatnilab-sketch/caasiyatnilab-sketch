document.addEventListener('click', function(e) {
    const link = e.target.closest('nav a, .skip-link');
    if (!link) return;

    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            // Move focus to the target section for screen readers
            // preventScroll: true ensures we don't interfere with the CSS smooth scroll
            targetSection.focus({ preventScroll: true });
        }
    }
});

console.log('Portfolio website loaded successfully!');
