## 2026-06-15 - DOM-based Selector Injection Prevention
**Vulnerability:** Unvalidated `href` attributes from navigation links were passed directly to `document.querySelector()`, potentially allowing selector injection or causing script crashes if malformed selectors were used.
**Learning:** Even simple smooth-scrolling logic can be a vector for DOM-based vulnerabilities if it trusts attributes like `href` without validation.
**Prevention:** Always validate that anchor targets match expected patterns (e.g., `^#[a-zA-Z0-9\-_]*$`) and use defensive `try-catch` blocks when calling DOM query methods with dynamic input.
