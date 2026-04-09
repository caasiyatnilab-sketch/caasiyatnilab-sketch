## 2026-04-09 - Optimize smooth scrolling by moving to CSS
**Learning:** Native CSS 'scroll-behavior: smooth;' is more efficient than JavaScript-based smooth scrolling. It reduces main thread execution, removes event listeners, and decreases bundle size.
**Action:** Always check if a performance-related feature (like smooth scrolling or simple animations) can be implemented with native CSS before using JavaScript.
