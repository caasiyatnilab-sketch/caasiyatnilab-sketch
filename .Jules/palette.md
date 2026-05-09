## 2025-05-15 - Accessible Smooth Scrolling Pattern
**Learning:** When using native CSS `scroll-behavior: smooth`, JavaScript is still needed to manage focus for accessibility. Using `element.focus({ preventScroll: true })` ensures that the focus ring moves to the target element without triggering an instant browser jump that would interrupt the smooth animation.
**Action:** Always combine `scroll-behavior: smooth` with programmatic focus management on target elements (which must have `tabindex="-1"` if they are not naturally focusable).
