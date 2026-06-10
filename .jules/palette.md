## 2025-05-14 - Accessible Single-Page Navigation
**Learning:** Smooth scrolling alone does not update the document's focus point. Screen reader users and keyboard navigators are left at the trigger element, breaking the logical flow of the page.
**Action:** Always pair smooth scroll animations with programmatic focus management (`element.focus()`). For non-interactive target elements like `<section>`, add `tabindex="-1"` to make them focusable via script.
