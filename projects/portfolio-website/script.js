// BOLT: Performance optimized script execution and event handling
// - Uses performance markers to track initialization time
// - Executes immediately (script is at body end) to reduce Time to Interactive
// - Implements event delegation on <nav> to minimize memory footprint and listener attachment time
// - Caches section references to avoid repeated DOM lookups during navigation
performance.mark('script-execution-start');

(function() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Cache section elements for faster access
    const sectionCache = new Map();
    const navLinks = nav.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        const id = link.getAttribute('href');
        try {
            const element = document.querySelector(id);
            if (element) {
                sectionCache.set(id, element);
            }
        } catch (e) {
            // Defensive check for invalid selectors
            console.error(`Bolt: Invalid section selector: ${id}`, e);
        }
    });

    // Event delegation: A single listener for all navigation clicks
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute('href');
        const targetSection = sectionCache.get(targetId);

        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    console.log('Portfolio website loaded successfully!');
})();

performance.mark('script-execution-end');
performance.measure('bolt-script-init', 'script-execution-start', 'script-execution-end');
