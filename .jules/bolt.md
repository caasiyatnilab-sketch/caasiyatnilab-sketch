## 2025-05-15 - Native CSS Smooth Scrolling
**Learning:** Native CSS `scroll-behavior: smooth` is more efficient than JavaScript-based scrolling as it runs on the compositor thread and preserves default browser behavior like URL hash updates.
**Action:** Always prefer native CSS features over JavaScript implementations for basic UI interactions when browser support is sufficient and accessibility (prefers-reduced-motion) can be respected.
