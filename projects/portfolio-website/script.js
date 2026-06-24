// Event delegation: use a single listener on the <nav> element to handle clicks on all its links.
// This reduces the number of event listeners and memory footprint.
// The 'DOMContentLoaded' listener is removed as 'defer' in the <script> tag ensures the script
// runs after the HTML is parsed.
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

console.log('Portfolio website loaded successfully!');
