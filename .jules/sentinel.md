## 2026-06-14 - Implementing CSP and Referrer Policy for Static Sites
**Vulnerability:** Static sites without CSP are vulnerable to XSS if they ever handle user-provided content or if a dependency is compromised. Lack of Referrer Policy can leak sensitive URL information to third-party domains.
**Learning:** Even simple static sites can benefit from defense-in-depth by restricting resource loading to same-origin and controlling referrer information via meta tags.
**Prevention:** Always include a restrictive CSP and a Referrer Policy in the HTML <head> for all web projects.
