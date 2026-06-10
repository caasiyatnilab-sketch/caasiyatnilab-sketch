## 2025-05-14 - Compositor-Thread Smooth Scrolling
**Learning:** Native CSS `scroll-behavior: smooth` is generally more performant than JavaScript-based smooth scrolling implementations because it can be handled by the browser's compositor thread, avoiding main-thread bottlenecks.
**Action:** Prefer CSS `scroll-behavior: smooth` for simple navigation-to-id transitions, and use `scrollIntoView()` in JS without the `behavior: 'smooth'` option to trigger it.

## 2025-05-14 - Redundant DOMContentLoaded with Defer
**Learning:** Scripts with the `defer` attribute are executed after the document has been parsed, but before `DOMContentLoaded` fires. Wrapping code in a `DOMContentLoaded` listener inside a `defer` script is safe but technically redundant.
**Action:** For simpler scripts using `defer`, consider omitting the `DOMContentLoaded` listener if the script only depends on the DOM being ready.
