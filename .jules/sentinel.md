## 2026-06-15 - Defensive Input Validation for DOM Selectors
**Vulnerability:** Potential for script errors or unintended DOM queries if 'href' attributes in navigation links are not validated before being passed to 'document.querySelector()'.
**Learning:** Even in static sites, user-controlled attributes (like 'href' on anchor tags) should be treated as untrusted input if they are used as parameters for DOM API methods.
**Prevention:** Always validate that an anchor link's 'href' starts with '#' before attempting to use it as a selector for internal navigation logic.
