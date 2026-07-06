performance.mark('script-execution-start');

// Use event delegation on the nav element for better performance
const nav = document.querySelector('nav');

if (nav) {
    nav.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Only prevent default and smooth scroll for internal links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            try {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (error) {
                console.error('Invalid selector:', href);
            }
        }
    });
}

console.log('Portfolio website loaded successfully!');
performance.measure('bolt-script-init', 'script-execution-start');
