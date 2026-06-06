document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // Use event delegation on the <nav> element to improve memory efficiency
    // and reduce the number of event listeners.
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');

        // Ensure the clicked element is an anchor link and has a valid hash target
        if (!link || !link.getAttribute('href') || !link.getAttribute('href').startsWith('#')) return;

        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});