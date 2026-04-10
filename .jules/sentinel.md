## 2025-05-14 - Navigation Script Hardening
**Vulnerability:** Global `preventDefault()` on all navigation links regardless of destination.
**Learning:** The original `script.js` intercepted all link clicks, which would break any future external links added to the site. Additionally, using user-controlled `href` attributes directly in `document.querySelector` without validation or error handling can lead to script crashes if the selector is invalid.
**Prevention:** Always validate that a link is intended for client-side handling (e.g., `startsWith('#')`) before preventing default behavior. Wrap DOM queries based on dynamic attributes in `try...catch` blocks.
