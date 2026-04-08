## 2025-05-15 - [Defense in Depth for Static Portfolio]
**Vulnerability:** Potential XSS via lack of CSP and unsafe `querySelector` usage with unsanitized `href` attributes.
**Learning:** Even simple static websites can be targets or stepping stones. A missing CSP allows for easier exploitation of any discovered XSS, and using `querySelector` directly with values from the DOM (like `href`) can lead to script errors or potential exploitation if those values are ever controllable by an attacker.
**Prevention:** Always implement a restrictive CSP even for simple sites. Sanitize and validate all inputs from the DOM before using them in sensitive APIs like `querySelector`.
