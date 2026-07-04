## 2025-05-14 - Programmatic focus management after smooth-scrolling
**Learning:** For keyboard and screen reader users, smooth-scrolling to a section via a navigation link does not automatically move the browser's focus. This can leave the user at the top of the page while the viewport is at the bottom, causing a confusing experience.
**Action:** Use `setTimeout` to programmatically call `.focus()` on the target section (which must have `tabindex="-1"`) after the smooth-scroll animation has started or completed.
