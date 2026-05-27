## 2025-05-15 - Accessible Internal Navigation
**Learning:** Standard smooth-scrolling often leaves keyboard focus on the triggering link, forcing users to re-tab through the header. Shifting focus to the target section (via `tabindex="-1"` and `.focus()`) provides a much better experience for screen reader and keyboard users.
**Action:** Always pair `scrollIntoView` with `.focus()` on the target element, ensuring the target has `tabindex="-1"` to be programmatically focusable without adding it to the global tab order.
