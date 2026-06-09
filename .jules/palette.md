## 2024-06-09 - Focus management after smooth scroll
**Learning:** Native CSS `scroll-behavior: smooth` does not automatically move keyboard focus to the target element. To ensure accessibility, programmatic focus must be moved to the target section after the scroll animation completes (using a timeout) to avoid the focus jumping back to the top on subsequent Tab presses.
**Action:** Always pair smooth scrolling with programmatic focus management (`element.focus({ preventScroll: true })`) and use `tabindex="-1"` on non-interactive target elements.
