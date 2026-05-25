## 2025-05-15 - Accessible Single-Page Navigation
**Learning:** Smooth scrolling alone is insufficient for accessibility in single-page applications. Without manual focus management, keyboard and screen reader users remain at the navigation source (the link) while the viewport moves, causing a disconnect.
**Action:** Always pair smooth scroll with programmatic focus shift. Target sections must have `tabindex="-1"` to receive focus via `.focus({ preventScroll: true })` without adding them to the natural tab order.
