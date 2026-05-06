## 2026-05-06 - Accessible Focus Management with Native Smooth Scroll
**Learning:** When using CSS `scroll-behavior: smooth`, calling `e.preventDefault()` in a JS click handler and then `target.focus({ preventScroll: true })` can sometimes block the browser's native scroll trigger. Letting the browser handle the scroll and using a small timeout for focus management is more robust.
**Action:** Use `setTimeout(() => target.focus({ preventScroll: true }), 0)` in click handlers for in-page anchors when relying on CSS for smooth scrolling.
