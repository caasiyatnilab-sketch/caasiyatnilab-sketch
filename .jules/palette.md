## 2026-04-26 - Accessible Smooth Navigation
**Learning:** For single-page navigation to be accessible, it is critical to move programmatic focus to the target section after the scroll transition begins. Using 'tabindex="-1"' on targets and 'focus({ preventScroll: true })' within a short 'setTimeout' ensures focus follows the visual movement without resetting to the top of the document or causing jumping.
**Action:** Always implement explicit focus management for internal hash links to maintain keyboard and screen reader context.
