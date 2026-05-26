document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link) {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#') && href.length > 1) {
                    try {
                        const targetSection = document.querySelector(href);
                        if (targetSection) {
                            e.preventDefault();
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    } catch (err) {
                        console.error('Navigation error:', err);
                    }
                }
            }
        });
    }
    console.log('Portfolio website loaded successfully!');
});
