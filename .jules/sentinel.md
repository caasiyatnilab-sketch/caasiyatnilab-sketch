## 2025-05-22 - Static Site Header Security and Selector Robustness
**Vulnerability:** Static portfolio websites often lack basic security headers (CSP, Referrer-Policy) and robust input validation for client-side navigation.
**Learning:** CSP can be effectively implemented via meta tags for static sites where server headers are inaccessible. Additionally, 'document.querySelector' crashes on invalid CSS selectors, which can be triggered by malformed URL fragments.
**Prevention:** Always use meta-tag based security headers for static deployments and wrap DOM selectors in validation/try-catch blocks when dealing with user-controlled data (like href attributes).
