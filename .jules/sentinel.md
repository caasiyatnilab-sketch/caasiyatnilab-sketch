## 2025-05-14 - Static Site Hardening
**Vulnerability:** Lack of defense-in-depth headers in static site.
**Learning:** For purely static websites without server control, <meta> tags are the primary way to implement CSP and Referrer-Policy. Navigation scripts often blindly intercept all clicks, which can break external links or cause runtime errors if selectors are invalid.
**Prevention:** Always implement strict CSP (default-src 'self') and Referrer-Policy (no-referrer) via meta tags. Ensure navigation scripts only target local hash links and use try-catch when dealing with user-controlled or attribute-based selectors.
