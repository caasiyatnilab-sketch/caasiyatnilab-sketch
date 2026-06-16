## 2026-06-16 - Selector Injection via Navigation Anchors
**Vulnerability:** DOM-based selector injection through unvalidated `href` attributes passed directly to `document.querySelector`.
**Learning:** Even simple static sites are vulnerable to selector injection if they use `getAttribute('href')` as a selector for smooth scrolling logic without validation. An attacker could potentially use complex CSS selectors to trigger unintended side effects or probe the DOM.
**Prevention:** Always validate that anchor targets are valid internal IDs (e.g., starts with '#') and use `document.getElementById()` for lookups instead of `querySelector()` when targeting by ID.
