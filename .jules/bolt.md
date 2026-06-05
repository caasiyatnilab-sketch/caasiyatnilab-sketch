## 2025-05-15 - Critical Path and Navigation Optimization
**Learning:** In projects with minimal assets, optimizing the Critical Rendering Path by placing the `<title>` before `<link>` and using the `defer` attribute on scripts ensures the page becomes interactive and visually identifiable sooner. Event delegation on the `<nav>` element provides a more robust and memory-efficient way to handle smooth scrolling compared to individual listeners.
**Action:** Always verify the placement of meta/link/script tags in the `<head>` for optimal CRP and favor event delegation for navigation components.
