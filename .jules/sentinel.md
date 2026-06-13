## 2026-06-13 - Secure selector handling in navigation

**Vulnerability:** Potential DOM-based selector injection or script crash when passing unsanitized `href` attributes from `<a>` tags directly into `document.querySelector()`.

**Learning:** Even in static websites, user-controlled data (like `href` attributes which could be manipulated via URL or DOM) should be validated before being used as selectors in DOM APIs to prevent errors or unexpected behavior.

**Prevention:** Always validate that an anchor link's `href` is a valid internal anchor (starts with `#`) and handle the edge case of a bare `#` (scroll to top) separately before querying the DOM.
