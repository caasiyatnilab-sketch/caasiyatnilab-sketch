// Redundant DOMContentLoaded wrapper removed as 'defer' attribute in <script> tag
// ensures the script runs after the document has been parsed.
const nav = document.querySelector('nav');

// Using event delegation to improve performance by reducing the number of event listeners
nav.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

console.log('Portfolio website loaded successfully!');