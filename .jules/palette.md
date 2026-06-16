## 2026-06-16 - Programmatic Focus Management for Smooth Scrolling
**Learning:** Smooth scrolling with `scrollIntoView` only provides a visual transition; it does not move keyboard or screen reader focus. Adding `tabindex="-1"` to target sections and calling `.focus()` after scrolling is essential for an accessible navigation experience.
**Action:** Always implement programmatic focus management when overriding default anchor behavior for smooth scrolling.
