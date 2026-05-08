// Using event delegation on the <nav> element to handle all navigation clicks with a single listener.
// This is more efficient than adding a listener to each individual link.
const nav = document.querySelector('header nav');

if (nav) {
    nav.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Only handle internal hash links for smooth scrolling and focus management.
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                // Focus the target element for accessibility.
                // { preventScroll: true } is used to avoid an instant jump, allowing the CSS 'scroll-behavior: smooth' to handle the animation.
                target.focus({ preventScroll: true });

                // We don't preventDefault() here to allow the browser to update the URL hash and trigger native CSS smooth scrolling.
                // Native CSS scrolling is offloaded to the browser's compositor thread, making it more performant than JS-based scrolling.
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');