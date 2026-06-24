## 2025-05-14 - Programmatic Focus Management for Smooth Scrolling
**Learning:** Native CSS `scroll-behavior: smooth` or JS `scrollIntoView` moves the viewport but does not shift keyboard or screen reader focus. To ensure accessibility in single-page navigation, focus must be manually moved to the target element.
**Action:** Always use `element.focus({ preventScroll: true })` after a smooth scroll animation (with a slight delay to allow the scroll to progress) to orient assistive technologies without causing jarring layout jumps.
