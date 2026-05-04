document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Use native CSS smooth scrolling by calling focus() on the target section.
                // The target section has tabindex="-1" to make it programmatically focusable.
                // This is more performant than scrollIntoView({ behavior: 'smooth' })
                // and better for accessibility.
                targetSection.focus();

                // Update URL hash without triggering a second browser-native scroll jump
                history.pushState(null, null, targetId);
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});