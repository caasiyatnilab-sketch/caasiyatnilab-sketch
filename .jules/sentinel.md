## 2026-07-05 - Content Security Policy for Static Portfolio
**Vulnerability:** Potential Cross-Site Scripting (XSS) and resource injection due to missing security headers in a static HTML project.
**Learning:** Static sites without a backend to set HTTP headers can still implement security policies using `<meta http-equiv="Content-Security-Policy">`.
**Prevention:** Always include a restrictive CSP in the `<head>` of static HTML files to ensure only trusted assets are loaded.
