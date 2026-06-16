## 2025-05-14 - Defensive Anchor Selection and Security Headers

**Vulnerability:** Lack of security headers (CSP, Referrer Policy) and potential DOMException in navigation script due to unvalidated selectors.

**Learning:** Static sites often neglect security headers that protect against XSS and data leakage. JavaScript that uses element attributes (like `href`) directly in `document.querySelector` can crash or be manipulated if those attributes contain invalid selectors.

**Prevention:** Always implement a restrictive CSP and Referrer Policy. Sanitize and validate any user-controlled or attribute-derived string before using it as a DOM selector.
