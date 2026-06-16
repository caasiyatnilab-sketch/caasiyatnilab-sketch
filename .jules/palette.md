## 2025-05-14 - Programmatic Focus Management for Smooth Scrolling
**Learning:** Native CSS `scroll-behavior: smooth` does not shift keyboard focus to the target element. Manual focus management using `element.focus({ preventScroll: true })` is essential for accessibility to ensure screen readers and keyboard users follow the visual transition without causing scroll-position jumps.
**Action:** For internal anchor links, ensure target elements have `tabindex="-1"` and programmatically shift focus to them after the scroll starts/completes.
