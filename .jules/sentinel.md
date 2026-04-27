## 2025-05-15 - [Security Enhancement] Hardening static site with CSP and Referrer-Policy
**Vulnerability:** Static portfolio website lacked baseline security headers, making it more susceptible to XSS and leaking referrer information to external sites if links were added later.
**Learning:** For static sites hosted without control over HTTP headers, <meta> tags provide a critical "Defense in Depth" layer to enforce Content Security Policy and Referrer-Policy.
**Prevention:** Always include a restrictive CSP and a privacy-preserving Referrer-Policy via <meta> tags in the <head> of index.html for static projects.
