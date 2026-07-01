document.addEventListener('DOMContentLoaded', function() {
    const navs = document.querySelectorAll('nav');
    
    // Use event delegation on each nav element to reduce memory overhead
    navs.forEach(nav => {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.hash) {
                e.preventDefault();
                try {
                    const targetSection = document.querySelector(link.hash);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } catch (err) {
                    console.error('Invalid selector:', link.hash);
                }
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});