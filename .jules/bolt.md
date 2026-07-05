## 2026-07-05 - Optimized Script Loading and Event Handling
**Learning:** Moving scripts to the `<head>` with the `defer` attribute allows for parallel downloading without blocking HTML parsing, which improves the Critical Rendering Path. Combining this with event delegation on a common parent (like `<nav>`) significantly reduces the overhead of individual event listeners and simplifies script initialization by removing the need for `DOMContentLoaded` wrappers.
**Action:** Use `defer` for non-critical scripts and leverage event delegation to minimize DOM interactions and memory usage.
