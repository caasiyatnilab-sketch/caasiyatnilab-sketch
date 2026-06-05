## 2026-06-05 - Secure Navigation and CSP Implementation
**Vulnerability:** Script crashes and potential for unintended behavior due to unsanitized hash values in `document.querySelector`.
**Learning:** In single-page navigation scripts, using `href` values directly in `document.querySelector` without validation can lead to `DOMException` crashes if the hash is not a valid CSS selector. Additionally, a missing CSP leaves the application vulnerable to basic injection risks.
**Prevention:** Always validate that the `href` starts with `#` and is not just `#`. Wrap `document.querySelector` in a try-catch block to handle invalid selectors gracefully. Use a strict `default-src 'self'` CSP when no external resources are required.
