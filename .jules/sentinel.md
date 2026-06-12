## 2025-05-15 - Content Security Policy (CSP) for Static Portfolio
**Vulnerability:** Risk of XSS and unauthorized resource loading on a static site.
**Learning:** For static sites where HTTP headers cannot be easily configured (e.g., GitHub Pages), a `<meta>` tag with `http-equiv="Content-Security-Policy"` is an effective way to implement defense-in-depth.
**Prevention:** Always implement a restrictive CSP (e.g., `default-src 'self'`) to ensure only trusted local resources are executed/loaded.
