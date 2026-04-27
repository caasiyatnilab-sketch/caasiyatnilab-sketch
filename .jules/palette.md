## 2025-05-15 - Accessible Internal Navigation
**Learning:** For internal page navigation to work reliably with assistive technology in single-page layouts, target elements must have `tabindex="-1"` and be focused programmatically after scrolling. Using `focus({ preventScroll: true })` within a short `setTimeout` (e.g., 100ms) ensures focus follows the visual movement without causing abrupt jumps or interrupting smooth scroll animations.
**Action:** Always pair internal anchor links with programmatic focus management and ensure target elements have the appropriate `tabindex`.
