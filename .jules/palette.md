## 2025-05-14 - Accessible Smooth Scrolling & Focus Management
**Learning:** In single-page layouts, smooth scrolling alone is insufficient for keyboard and screen reader users. Without manual focus management, the viewport moves but the "point of interaction" remains on the clicked link, forcing users to re-tab through the entire page. Additionally, non-interactive elements like `<section>` require `tabindex="-1"` to be programmatically focusable via `.focus()`.

**Action:** Always pair smooth-scroll transitions with a `setTimeout` (matching transition duration) to programmatically shift focus to the target element. Ensure target elements have `tabindex="-1"` and clear `:focus-visible` styles.
