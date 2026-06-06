## 2026-06-06 - [Accessible Single-Page Navigation]
**Learning:** For accessible smooth scrolling, programmatically shifting focus to the target section is crucial. Using a `setTimeout` (e.g., 500ms) before calling `.focus({ preventScroll: true })` ensures the scroll animation has progressed sufficiently and prevents the browser from overriding the smooth scroll with an immediate jump.
**Action:** Always pair smooth-scrolling with programmatic focus management and respect `prefers-reduced-motion` for inclusive navigation.
