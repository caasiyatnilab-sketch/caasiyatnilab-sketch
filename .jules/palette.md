## 2025-05-14 - Accessible Single-Page Navigation
**Learning:** In single-page applications with smooth scrolling, it is critical to programmatically shift focus to the target section. This ensures screen readers announce the new content and subsequent keyboard navigation (Tab) starts from the correct location. Always respect `prefers-reduced-motion` to avoid causing vestibular distress.
**Action:** Use `targetSection.focus({ preventScroll: true })` after scrolling. Add `tabindex="-1"` and `aria-labelledby` to target sections to make them focusable and identifiable by screen readers.
