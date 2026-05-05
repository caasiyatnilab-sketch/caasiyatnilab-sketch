## 2025-05-14 - Security Headers for Static Sites
**Vulnerability:** Lack of Content Security Policy (CSP) and Referrer-Policy on a static portfolio site.
**Learning:** Even simple static sites can benefit from defense-in-depth measures like CSP to prevent potential XSS (if third-party scripts are added later) and Referrer-Policy to protect user privacy.
**Prevention:** Always include a baseline CSP and a privacy-conscious Referrer-Policy via `<meta>` tags when traditional HTTP headers are unavailable (e.g., on GitHub Pages or other static hosting).
