## 2025-05-15 - Accessible Navigation and Focus Management
**Learning:** For a smooth and accessible single-page navigation experience, it is essential to manage focus programmatically after smooth-scrolling. Sections must have `tabindex="-1"` to be focusable via JavaScript. Adding a delay (e.g., 500ms) before calling `.focus()` ensures that the scroll animation is far enough along for screen readers to correctly identify the new context.
**Action:** Always pair smooth-scrolling with programmatic focus management and ensure target elements are focusable with `tabindex="-1"`.
