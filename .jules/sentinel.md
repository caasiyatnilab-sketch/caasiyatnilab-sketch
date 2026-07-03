## 2025-05-14 - Navigation Script Hardening
**Vulnerability:** Unsanitized use of `href` in `document.querySelector`.
**Learning:** Using attribute values directly in `querySelector` can cause scripts to crash if the value is not a valid CSS selector. Additionally, intercepting all clicks on `nav a` links can break external navigation.
**Prevention:** Always validate that an `href` starts with `#` before treating it as an internal link, and wrap `querySelector` in a try-catch block for resilience.
