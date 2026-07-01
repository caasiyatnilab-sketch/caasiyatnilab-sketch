## 2026-07-01 - Accessible Smooth Scrolling and Focus Management
**Learning:** Programmatic smooth scrolling (e.g., via `scrollIntoView`) does not automatically move keyboard focus. This can leave keyboard and screen reader users "stranded" at the top of the page while the viewport has moved.
**Action:** Always pair programmatic scrolling with manual focus management. Set `tabindex="-1"` on the target element and call `.focus({ preventScroll: true })` to ensure the focus ring moves with the viewport without fighting the animation.
