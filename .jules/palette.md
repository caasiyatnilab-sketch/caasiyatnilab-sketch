## 2025-05-14 - Accessible In-Page Navigation Pattern
**Learning:** Smooth scrolling with JavaScript often leaves keyboard focus behind at the trigger element, breaking the experience for screen readers and keyboard users. Target elements must have `tabindex="-1"` to receive programmatic focus via `.focus()` without being added to the natural tab order.
**Action:** Always pair in-page smooth scroll links with programmatic focus movement to the target element, ensuring the target has `tabindex="-1"`. Combine this with a "Skip to Content" link for full keyboard accessibility.
