## 2025-05-22 - Accessibility-First Performance Boost
**Learning:** Performance optimizations, such as offloading animations to the browser's CSS engine, must be paired with explicit focus management to maintain accessibility for keyboard and screen reader users. Without `tabindex="-1"` and `.focus()`, users can be left "stranded" at the top of the page after a scroll initiation.
**Action:** Always verify focus management and screen reader compatibility when refactoring navigation-related logic for performance.
