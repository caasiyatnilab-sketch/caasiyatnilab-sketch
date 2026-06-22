document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Security check: ensure the link is an internal hash link and not just '#'
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();

                try {
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (err) {
                    console.error('Invalid selector:', href, err);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});