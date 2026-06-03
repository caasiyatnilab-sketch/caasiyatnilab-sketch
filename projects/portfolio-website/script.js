// Use event delegation on the nav element for better performance and memory efficiency.
// Since the script is loaded with 'defer', the DOM is already parsed, so DOMContentLoaded is not strictly needed.
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        // Find the closest anchor tag if a child element (like a span or icon) was clicked
        const link = e.target.closest('a');

        // Ensure it's an internal link
        if (!link || !link.getAttribute('href') || !link.getAttribute('href').startsWith('#')) return;

        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

console.log('Portfolio website loaded successfully!');
