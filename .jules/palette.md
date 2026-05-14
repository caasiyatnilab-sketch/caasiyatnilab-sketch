## 2025-05-15 - Accessible Smooth Scrolling Pattern
**Learning:** Combining native CSS 'scroll-behavior: smooth' with JavaScript 'element.focus()' can cause the browser to "jump" to the target before the animation completes. Using 'element.focus({ preventScroll: true })' allows the focus to move (for screen readers) while letting the CSS animation handle the visual transition smoothly.
**Action:** Always use 'preventScroll: true' when programmatically moving focus to an element that is also being scrolled to via CSS smooth scroll.
