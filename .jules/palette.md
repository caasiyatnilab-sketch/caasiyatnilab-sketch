## 2025-05-14 - Accessible smooth scrolling with focus management
**Learning:** Combining CSS `scroll-behavior: smooth` with programmatic `.focus({ preventScroll: true })` provides a performant and accessible navigation experience that respects motion preferences and maintains focus context for screen readers.
**Action:** For single-page navigation, use native CSS smooth scrolling wrapped in a `(prefers-reduced-motion: no-preference)` media query and handle focus management in JS to ensure screen reader compatibility without interrupting the animation.
