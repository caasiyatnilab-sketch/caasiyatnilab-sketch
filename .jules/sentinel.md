## 2025-01-24 - Security Headers for Static Sites
**Vulnerability:** Missing Content Security Policy (CSP) and Referrer-Policy in a static web application.
**Learning:** For projects without a server-side configuration (like `projects/portfolio-website/`), security headers must be defined using `<meta>` tags in the HTML `<head>`. Some directives (e.g., `frame-ancestors`) are ignored in `<meta>` CSPs and require server-side HTTP headers.
**Prevention:** Always include a restrictive CSP and a `strict-origin-when-cross-origin` Referrer-Policy via `<meta>` tags in the entrypoint HTML of static sites.
