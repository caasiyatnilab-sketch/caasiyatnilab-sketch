## 2026-04-18 - Input Validation for DOM Selectors
**Vulnerability:** Denial of Service / Script Crash via Unsanitized Selectors
**Learning:** The document.querySelector() method throws a DOMException if it receives an invalid CSS selector (e.g., a full URL). In single-page navigation scripts that use href attributes directly, this can cause the entire script to crash, breaking all subsequent interactive elements.
**Prevention:** Always wrap document.querySelector() in a try-catch block when using user-controlled input or attributes from the DOM. Additionally, validate that the input follows the expected format (e.g., starts with # for internal anchors) before attempting to use it as a selector.
