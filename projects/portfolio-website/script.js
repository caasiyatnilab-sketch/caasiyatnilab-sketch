// Optimization: Since we use 'defer' in the script tag, the script executes
// after the HTML document is fully parsed, but before DOMContentLoaded.
// We also leverage native CSS 'scroll-behavior: smooth' for hardware-accelerated
// animations, removing the need for redundant JS-based scroll logic.

console.log('Portfolio website loaded successfully!');
