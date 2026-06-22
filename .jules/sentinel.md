## 2026-06-22 - Implement Security Headers

**Vulnerability:** Missing Content-Security-Policy (CSP) and Referrer-Policy headers/meta tags in a static portfolio website. Without CSP, the site is more vulnerable to Cross-Site Scripting (XSS) and unauthorized resource loading. Without a Referrer-Policy, sensitive information might be leaked to third-party sites via the Referer header.

**Learning:** For static sites without a backend to set HTTP headers, `<meta>` tags are an effective way to implement basic security policies. `default-src 'self'` provides a strong baseline by restricting all resources to the same origin by default.

**Prevention:** Always include a restrictive CSP and a sensible Referrer-Policy (like `no-referrer-when-downgrade`) in the `<head>` of HTML documents to provide defense-in-depth.
