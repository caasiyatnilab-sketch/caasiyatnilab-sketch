document.addEventListener('DOMContentLoaded', function() {
    /* Performance optimization: Removed JavaScript-based smooth scrolling logic.
       The same behavior is now handled more efficiently by native CSS 'scroll-behavior: smooth'
       in styles.css, which runs on the compositor thread and preserves URL hash updates. */
    console.log('Portfolio website loaded successfully!');
});