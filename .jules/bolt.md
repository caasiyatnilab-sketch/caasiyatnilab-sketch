## 2025-06-10 - Native Smooth Scroll vs Focus Management
**Learning:** Using native CSS `scroll-behavior: smooth` is superior for performance as it runs on the compositor thread, but unlike JavaScript-based implementations, it does not move keyboard focus to the target element.
**Action:** When using CSS smooth scroll, always implement a lightweight JavaScript fallback for focus management using `setTimeout` to ensure accessibility (`.focus({ preventScroll: true })`) after the transition completes.
