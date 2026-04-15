## 2025-05-15 - Defense-in-Depth for Static Sites
**Vulnerability:** Missing security headers (CSP, Referrer-Policy) in static HTML projects.
**Learning:** For projects without a backend server, basic security headers must be implemented using `<meta>` tags in the HTML `<head>`. Note that `X-Frame-Options` and `X-Content-Type-Options` are not supported via `<meta>` tags and require server-side configuration.
**Prevention:** Always include CSP and Referrer-Policy meta tags in the root `index.html` of new static frontend projects.
