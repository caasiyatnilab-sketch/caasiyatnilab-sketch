# Sentinel's Security Journal

This journal is reserved for critical security discoveries and specific vulnerability patterns.

## 2026-06-21 - Implementation of CSP for defense-in-depth
**Vulnerability:** Lack of Content Security Policy (CSP) headers or meta tags.
**Learning:** For a static site with no external dependencies, a strict CSP using `'self'` for `default-src`, `script-src`, and `style-src` provides a robust second layer of defense against XSS without impacting functionality.
**Prevention:** Always consider implementing CSP as part of the initial setup to mitigate the risk of untrusted code execution.
