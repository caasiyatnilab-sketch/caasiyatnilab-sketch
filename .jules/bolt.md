## 2025-05-14 - Redundant JavaScript Smooth Scrolling
**Learning:** Offloading smooth scrolling to the browser's compositor thread via CSS `scroll-behavior: smooth` is more efficient than JavaScript-based implementations that run on the main thread. Additionally, moving scripts to the `<head>` with `defer` improves the Critical Rendering Path by parallelizing downloads without blocking HTML parsing.
**Action:** Always prefer native CSS for smooth scrolling and use `defer` for non-critical scripts to optimize page load and interactivity.
