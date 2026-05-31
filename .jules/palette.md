## 2026-05-31 - Accessible Single-Page Navigation
**Learning:** Programmatic focus shift on single-page navigation is critical for keyboard and screen reader users to maintain context. Without it, the focus remains on the clicked link, forcing users to re-tab through the entire page from the top.
**Action:** When implementing single-page navigation, always use JavaScript to shift focus to the target section using `.focus({ preventScroll: true })`. Ensure the target section has `tabindex="-1"` and a clear accessible name via `aria-labelledby`.
