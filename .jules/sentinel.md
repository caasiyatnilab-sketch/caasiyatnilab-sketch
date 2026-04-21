## 2025-05-15 - Robust DOM Selection for Navigation
**Vulnerability:** Script crash due to unhandled exceptions in `document.querySelector` when processing anchor `href` attributes.
**Learning:** Using `href` values directly as CSS selectors in `document.querySelector` is dangerous as they may contain characters (like ':' in URLs) that make them invalid selectors, causing the script to terminate.
**Prevention:** Always validate that an `href` is an internal hash (e.g., `.startsWith('#')`) and wrap `document.querySelector` calls in try-catch blocks to handle malformed selectors gracefully.
