## 2026-05-12 - Accessible Smooth Scrolling & Focus Management
**Learning:** Combining native CSS `scroll-behavior: smooth` with JavaScript `.focus({ preventScroll: true })` allows for accessible in-page navigation that synchronizes screen reader focus without interrupting the smooth visual transition.
**Action:** Use native smooth scrolling and explicitly manage focus on target elements (with `tabindex="-1"`) using `preventScroll: true`.
