## 2024-05-23 - Focus Management in Smooth Scrolling
**Learning:** When implementing smooth scrolling for internal links via JavaScript, the browser's default focus management is often broken. Screen reader and keyboard users can be left at the top of the page while the viewport moves to the target section.
**Action:** Always programmatically move focus to the target element (using `.focus()`) after scrolling. Ensure the target element has `tabindex="-1"` if it's not naturally focusable (like a `<section>` or `<main>`). Use `{ preventScroll: true }` in the `.focus()` call to avoid jarring secondary jumps.

## 2024-05-23 - Skip-to-Content Implementation
**Learning:** Skip-to-content links are vital for keyboard accessibility but should be visually hidden by default to avoid cluttering the UI for mouse users.
**Action:** Use absolute positioning with a negative `top` value to hide the link, and transition it to `top: 0` on `:focus`. This provides a smooth visual entry for keyboard users.
