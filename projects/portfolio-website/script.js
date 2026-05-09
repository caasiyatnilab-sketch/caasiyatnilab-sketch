document.querySelector('nav').addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href').startsWith('#')) {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.focus({ preventScroll: true });
            if (targetId !== '#main-content') {
                history.pushState(null, null, targetId);
            }
        }
    }
});
console.log('Portfolio website loaded successfully!');
