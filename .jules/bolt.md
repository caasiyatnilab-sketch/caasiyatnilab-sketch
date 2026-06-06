## 2026-06-06 - [Native Smooth Scrolling vs JS-based implementation]
**Learning:** Native CSS `scroll-behavior: smooth` is more efficient than JS-based `scrollIntoView` as it is handled by the browser's compositor thread, reducing main thread contention.
**Action:** Always prefer native CSS for common UI patterns like smooth scrolling when support is sufficient, ensuring to also include accessibility fallbacks like `prefers-reduced-motion`.
