## 2025-05-14 - Defensive Navigation and Security Headers
**Vulnerability:** Potential for client-side crashes and resource leakage through insecure defaults.
**Learning:** Even simple static sites can benefit from defense-in-depth measures. CSP and Referrer Policy provide base-level security, while defensive coding in event-delegated navigation prevents crashes from malformed or unexpected hashes.
**Prevention:** Always validate URL-based input (like hashes) before passing them to DOM APIs like `querySelector`. Implement CSP meta tags by default to restrict resource loading.
