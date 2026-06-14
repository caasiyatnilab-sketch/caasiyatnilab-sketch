## 2025-05-14 - Accessible Smooth Scrolling Pattern
**Learning:** Programmatic focus management is essential when using JavaScript for smooth scrolling to internal anchors. Without it, keyboard and screen reader users remain at the trigger element, losing the visual context of the scroll.
**Action:** Always set `tabindex="-1"` on the target element and call `.focus()` after a smooth scroll. Include validation for anchor targets to prevent selector injection.
