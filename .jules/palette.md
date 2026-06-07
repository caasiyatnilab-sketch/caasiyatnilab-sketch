## 2025-05-15 - [Accessible Smooth Scrolling]
**Learning:** Standard smooth scrolling via CSS or JS often leaves the keyboard/screen reader focus on the triggering link, creating a disjointed experience for users relying on assistive technology.
**Action:** Always move programmatic focus to the target section after a smooth scroll event using `.focus()` and ensure the target has `tabindex="-1"` if it's not a naturally focusable element. Use `preventScroll: true` in `.focus()` to avoid interrupting the smooth scroll animation.

## 2025-05-15 - [Skip-to-Content Implementation]
**Learning:** A skip-to-content link is essential for keyboard users to bypass repetitive navigation. It must be the first focusable element in the DOM and remain hidden until it receives focus.
**Action:** Use absolute positioning to move the skip link off-screen and bring it into view only on `:focus`.
