## 2025-05-14 - Accessible Smooth Scrolling and Focus Management
**Learning:** Combining CSS `scroll-behavior: smooth` with JavaScript focus management requires using `{ preventScroll: true }` in the `.focus()` call. This ensures the browser's native smooth scroll is not interrupted by an instant jump to the focused element, while still providing screen reader users with the correct context.
**Action:** Use native CSS for smooth scrolling and refactor JS to handle focus management with `preventScroll: true` for a performant and accessible navigation experience.
