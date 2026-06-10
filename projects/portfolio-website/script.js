document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Event delegation: use a single listener on the parent element
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');

        // Only handle local anchor links
        if (targetId && targetId.startsWith('#') && targetId !== '#') {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Using CSS scroll-behavior: smooth (set in styles.css) is more performant.
                // We still use scrollIntoView here to trigger the scroll, but without
                // the behavior: 'smooth' option to let CSS handle it.
                targetSection.scrollIntoView();

                // Focus the target for accessibility
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus({ preventScroll: true });
            }
        }
    });
    
    console.log('Portfolio website loaded successfully!');
});