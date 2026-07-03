document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        // Use event delegation for better performance and less memory usage
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            
            if (link && link.getAttribute('href').startsWith('#')) {
                const targetId = link.getAttribute('href');
                try {
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        // Smooth scrolling is handled by CSS (scroll-behavior: smooth)
                        // We manage focus for accessibility
                        targetSection.setAttribute('tabindex', '-1');
                        targetSection.focus();
                    }
                } catch (error) {
                    console.error('Invalid selector:', targetId);
                }
            }
        });
    }
    
    console.log('Portfolio website loaded successfully!');
});