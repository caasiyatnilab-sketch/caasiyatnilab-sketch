## 2025-05-14 - Native Smooth Scrolling and Defer Optimization
**Learning:** Native CSS `scroll-behavior: smooth` is more performant than JS-based solutions as it offloads work to the compositor thread. However, it doesn't handle focus management. When using `defer` on scripts, `DOMContentLoaded` is redundant as the script executes after the DOM is ready.
**Action:** Always prefer native CSS for smooth scrolling. Combine with `tabindex="-1"` and `.focus()` on target elements to maintain accessibility. Use `defer` and avoid `DOMContentLoaded` wrappers for cleaner, faster initialization.
