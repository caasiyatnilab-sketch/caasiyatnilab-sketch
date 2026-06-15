## 2025-05-22 - Smooth Scroll and Focus Management
**Learning:** When programmatically shifting focus to an element after smooth scrolling (e.g., via `element.focus()`), always use the option `{ preventScroll: true }` to ensure the browser's default focus-scrolling behavior does not interrupt or jump over the smooth scroll animation.
**Action:** Use `element.focus({ preventScroll: true })` for focus management in single-page navigation to maintain smooth transitions while improving accessibility.
