// Using event delegation on the nav element to reduce the number of event listeners
// Removing DOMContentLoaded wrapper as 'defer' attribute in <script> tag handles timing
const nav = document.querySelector('nav');

if (nav) {
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
}

console.log('Portfolio website script loaded (optimized with event delegation and defer)');
