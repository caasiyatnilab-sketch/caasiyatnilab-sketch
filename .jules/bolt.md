## 2025-05-14 - Redundant DOMContentLoaded with Defer
**Learning:** Using `DOMContentLoaded` inside a script loaded with the `defer` attribute is redundant because `defer` scripts only execute after the DOM is fully parsed, just before the `DOMContentLoaded` event fires.
**Action:** When using `defer`, write script logic directly at the top level or in a module-scoped function without wrapping it in `DOMContentLoaded` or `window.onload`.

## 2025-05-14 - Event Delegation for Navigation
**Learning:** Attaching individual event listeners to multiple navigation links increases memory overhead and can be less performant than a single listener on a parent element.
**Action:** Use event delegation on a stable parent element (like `<nav>` or `<ul>`) to handle events for multiple child elements efficiently.
