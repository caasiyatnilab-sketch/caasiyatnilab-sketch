const nav = document.querySelector('nav');
if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // native CSS smooth scrolling is enabled via styles.css
                targetSection.scrollIntoView();
                // move focus to the target section for accessibility
                targetSection.focus({ preventScroll: true });
                // update URL hash without jump
                history.pushState(null, null, targetId);
            }
        }
    });
}