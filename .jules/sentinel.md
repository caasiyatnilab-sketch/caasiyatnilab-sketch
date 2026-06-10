## 2025-05-15 - Input Validation for DOM Selectors
**Vulnerability:** The smooth-scroll script used `document.querySelector` directly with the `href` attribute of anchor links, which could cause a script crash if the attribute contained a malformed CSS selector.
**Learning:** Even internal navigation links can be a source of runtime errors if their values are not validated before being passed to DOM APIs that expect specific formats.
**Prevention:** Always validate and/or wrap `document.querySelector` calls in `try-catch` blocks when dealing with dynamic input, even if it appears to be from a trusted source like static HTML attributes.
