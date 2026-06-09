## 2026-06-09 - Accessible Smooth Scroll and Focus Management
**Learning:** In single-page applications using smooth scroll, the visual position changes but the keyboard focus remains on the clicked link. This creates a disconnect for screen reader users and keyboard navigators who expect to be at the new content location.
**Action:** Always move programmatic focus to the target section (using `tabindex="-1"`) after the smooth scroll animation completes (e.g., via `setTimeout`). Ensure sections have `aria-labelledby` referencing their headings for clear landmark context.
