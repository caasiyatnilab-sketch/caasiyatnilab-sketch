## 2025-05-15 - Security Header and Script Hardening
**Vulnerability:** Missing defense-in-depth headers (CSP, Referrer Policy) and potential script crash via `document.querySelector`.
**Learning:** Browser support for Referrer Policy via meta tags requires the name attribute to be exactly "referrer", not "Referrer-Policy". Additionally, `document.querySelector('#')` throws a DOMException, which can halt script execution if not handled when processing anchor links.
**Prevention:** Always use `name="referrer"` for meta-based referrer policies and validate that CSS selectors derived from user-controlled attributes (like `href`) are valid and non-empty before passing them to `querySelector`.
