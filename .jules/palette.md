## 2025-06-05 - [Accessible Single-Page Navigation]
**Learning:** For smooth-scrolling single-page sites, simply scrolling to a section is not enough for accessibility; keyboard focus must be programmatically moved to the target section using `tabindex="-1"` and `.focus()`. To avoid a jarring experience, a `setTimeout` (approx. 500ms) should be used to allow the smooth scroll animation to finish before focusing, and `focus({ preventScroll: true })` ensures the browser doesn't trigger an additional scroll jump.

**Action:** Always pair smooth-scrolling links with programmatic focus management, using a delay to sync with CSS transitions.

## 2025-06-05 - [Visual Focus Management]
**Learning:** When programmatically focusing a large section container for accessibility, showing the standard focus outline can be visually distracting for users who just clicked a link. Using `section:focus { outline: none; }` while maintaining high-contrast `:focus-visible` for keyboard-driven navigation provides a balance between accessibility and visual polish.

**Action:** Use `:focus-visible` for interactive elements (links, buttons) but suppress `:focus` outlines on large non-interactive containers focused programmatically.
