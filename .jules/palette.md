## 2025-05-17 - Accessible Smooth Scrolling Pattern
**Learning:** Combining CSS 'scroll-behavior: smooth' with programmatic '.focus()' on targeted sections (with tabindex='-1') provides the best balance of UX and accessibility (A11y), as it updates the screen reader's focus without interrupting the smooth visual transition.
**Action:** Use 'tabindex="-1"' on scroll targets and call '.focus({ preventScroll: true })' in the click handler.
