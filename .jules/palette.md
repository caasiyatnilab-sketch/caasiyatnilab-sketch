## 2025-05-14 - Skip-to-Content and Smooth Scroll Focus Management
**Learning:** For static sites using native `scrollIntoView` for smooth scrolling, it is critical to programmatically focus the target section after a delay (e.g., 500ms) to ensure keyboard and screen reader accessibility, as native smooth scrolling does not automatically move focus. Target sections must have `tabindex="-1"` to be programmatically focusable.
**Action:** Always include focus management logic when implementing smooth scrolling and ensure sections are semantic (using `<main>` and proper IDs).
