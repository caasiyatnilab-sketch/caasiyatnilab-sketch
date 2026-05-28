## 2025-05-14 - Static Site Security Hardening via Meta Tags
**Vulnerability:** Lack of defense-in-depth security headers in static HTML files.
**Learning:** For static sites without a configurable backend server, security headers can be partially implemented using `<meta http-equiv>` tags. However, `Permissions-Policy` is NOT supported in meta tags, unlike `Content-Security-Policy`.
**Prevention:** Use CSP and Referrer-Policy meta tags for static sites; prefer server-side headers for Permissions-Policy.
