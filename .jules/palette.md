## 2025-05-14 - Accessible Smooth Scrolling & Focus Management
**Learning:** Using `scrollIntoView` alone is insufficient for accessibility as it doesn't move the keyboard focus. Screen reader users remain at the previous focus location, leading to confusion.
**Action:** Always combine smooth scrolling with programmatic focus management. Add `tabindex="-1"` to the target section and call `.focus({ preventScroll: true })` after triggering the scroll. Ensure `scroll-behavior` respects `prefers-reduced-motion` in both CSS and JavaScript.
