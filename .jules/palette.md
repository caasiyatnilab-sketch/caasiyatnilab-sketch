# Palette's UX Journal

## 2026-06-30 - Focus management with smooth scrolling
**Learning:** Using `scrollIntoView` for navigation provides a nice visual transition but fails to move the accessibility focus. This leaves keyboard and screen reader users stranded at the top of the page.
**Action:** Always complement smooth scrolling with programmatic focus management by setting `tabindex="-1"` on the target and calling `.focus()`.
