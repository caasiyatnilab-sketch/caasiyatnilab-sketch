## 2025-05-14 - Skip to Content and Focus Management
**Learning:** For single-page applications or sites with smooth scrolling, simply moving the viewport is not enough for accessibility. Focus must be programmatically moved to the target element (using `tabindex="-1"`) to ensure the next "Tab" key press continues from the new location.
**Action:** Always pair internal smooth scrolling with focus management and ensure landmarks have `tabindex="-1"` if they are focus targets.
