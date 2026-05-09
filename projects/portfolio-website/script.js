// Use event delegation on the nav element to reduce memory usage and improve initialization
const nav = document.querySelector('nav');
if (nav) {
    nav.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.hash) {
            const target = document.querySelector(link.hash);
            if (target) {
                // Focus the target section for accessibility, ensuring the browser doesn't
                // perform an instant jump by using preventScroll: true
                target.focus({ preventScroll: true });
                // We don't preventDefault() to allow the browser's native CSS smooth
                // scrolling and URL hash update to occur
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
