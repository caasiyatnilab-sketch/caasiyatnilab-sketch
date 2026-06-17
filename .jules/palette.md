## 2025-05-14 - Programmatic Focus Management for Smooth-Scrolling Navigation
**Learning:** Native CSS `scroll-behavior: smooth` and JavaScript's `scrollIntoView` handle visual scrolling but do not automatically shift keyboard focus to the target element. This breaks the experience for screen reader and keyboard users.
**Action:** Always add `tabindex="-1"` to target sections and use `element.focus({ preventScroll: true })` immediately after triggering a smooth scroll to ensure the focus follows the visual transition without causing a browser-default "jump".
