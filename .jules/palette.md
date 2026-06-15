## 2025-05-14 - Accessible Single-Page Navigation
**Learning:** Standard smooth-scrolling implementations often neglect keyboard focus, leaving keyboard users stranded at the top of the page while the viewport moves. Additionally, lack of visual feedback on scroll makes it hard for users to know which section they are currently viewing in a long-scroll layout.
**Action:** Always pair smooth-scrolling with programmatic focus management (using `tabindex="-1"` and `.focus()`) and use `IntersectionObserver` to provide real-time visual feedback via active navigation states.
