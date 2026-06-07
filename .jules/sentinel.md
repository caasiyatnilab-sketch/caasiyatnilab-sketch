## 2025-05-15 - Balancing CSP Strictness with Compatibility
**Vulnerability:** Potential XSS/Injection risks due to missing Content Security Policy.
**Learning:** Implementing a strict 'default-src 'self'' CSP can be overly restrictive for projects that might require inline styles or specific browser behaviors, even in simple static sites. A more compatible starting point for existing projects is 'default-src 'self'; style-src 'self' 'unsafe-inline';'.
**Prevention:** Always verify the visual state of the application after applying CSP and prefer incremental tightening of policies. Include explanatory comments for security headers to assist maintainers.
