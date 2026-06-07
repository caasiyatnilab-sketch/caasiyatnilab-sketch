## 2026-06-07 - Accessible Navigation & Skip Link
**Learning:** Keyboard users and screen reader users often struggle with Single Page Applications or sites using smooth scrolling because the visual scroll doesn't automatically move the focus. A "Skip to Content" link and programmatic focus management are essential for a truly accessible experience.
**Action:** Always include a skip-to-content link as the first focusable element. When implementing custom smooth scroll logic, use `setTimeout` to move focus to the target element (with `tabindex="-1"`) after the animation completes.
