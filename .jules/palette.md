## 2025-05-14 - Smooth Scrolling with Focus Management
**Learning:** Programmatic smooth scrolling (`scrollIntoView`) does not automatically move keyboard focus. Without manual focus management, keyboard users stay at the trigger (the link), while the viewport moves elsewhere, creating a disconnected experience.
**Action:** Always pair `scrollIntoView()` with `.focus()` on the target element. Ensure target elements have `tabindex="-1"` to be programmatically focusable without being in the natural tab order.
