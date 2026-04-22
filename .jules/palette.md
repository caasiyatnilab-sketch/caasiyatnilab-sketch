## 2025-05-14 - Accessible Internal Navigation
**Learning:** For single-page navigation to be truly accessible, smooth scrolling must be paired with programmatic focus management. Simply scrolling to an element doesn't move the keyboard focus or screen reader cursor, which can leave users lost.
**Action:** Always add `tabindex="-1"` to scroll targets and use `element.focus({ preventScroll: true })` after the scroll begins (using a small `setTimeout` to ensure the browser prioritizes the visual transition). Also, always include a "Skip to Content" link for keyboard users.
