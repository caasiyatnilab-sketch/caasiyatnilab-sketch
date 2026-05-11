## 2025-05-14 - Accessible Focus Management in Single Page Navigation
**Learning:** In single-page applications or sites using internal hash links for navigation, simply scrolling to the target is insufficient for screen reader users. The browser's focus remains on the clicked link, making it difficult for users to continue reading from the new location.
**Action:** Always move programmatic focus to the target section using `element.focus({ preventScroll: true })`. Ensure the target has `tabindex="-1"` and `outline: none` to be focusable without an unsightly ring for mouse users.
