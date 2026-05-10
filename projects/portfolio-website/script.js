// Use event delegation on the nav element to improve performance and reduce memory usage.
// By delegating to the <nav> container, we avoid attaching multiple event listeners to individual links.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            // We allow native CSS smooth scrolling by NOT calling e.preventDefault().
            // This offloads animation work to the browser's compositor thread.
            
            // Explicitly call .focus() to synchronize accessibility (screen reader focus) with the visual scroll.
            // preventScroll: true ensures that the .focus() call doesn't cause an instant jump that would interrupt the smooth scroll.
            targetSection.focus({ preventScroll: true });
        }
    });
}

console.log('Portfolio website loaded successfully!');