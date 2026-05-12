const nav = document.querySelector('nav');
if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (targetId === '#' || !targetId.startsWith('#')) return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            // Accessible focus management: move focus to the target section
            // preventScroll: true ensures native CSS smooth scrolling handles the movement
            targetSection.focus({ preventScroll: true });
        }
    });
}
console.log('Portfolio website loaded successfully!');