## 2025-06-17 - Content Security Policy (CSP) Enhancement
**Vulnerability:** Potential for Cross-Site Scripting (XSS) and data injection if external or inline scripts were maliciously introduced.
**Learning:** Even static sites benefit from defense-in-depth measures like CSP to restrict resource loading and execution to trusted origins.
**Prevention:** Implement a restrictive CSP (e.g., `default-src 'self'`) to limit the attack surface by default.
