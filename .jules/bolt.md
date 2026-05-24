## 2025-05-14 - Optimized Static Site Navigation
**Learning:** In a static site without a build system, offloading smooth scrolling to CSS (`scroll-behavior: smooth`) reduces main-thread JS execution. Combined with event delegation on a parent container and the `defer` attribute, it minimizes initialization time and memory overhead while maintaining accessibility through programmatic focus.
**Action:** Always prefer CSS for animations/scrolling and event delegation for navigation links to keep the main thread free.
