## 2025-05-15 - Prefer native CSS smooth scrolling over JavaScript
**Learning:** For static websites with simple anchor-based navigation, native CSS 'scroll-behavior: smooth' is more efficient than JavaScript implementations. It reduces the number of HTTP requests (by removing script.js), decreases main-thread execution, and is handled by the browser's compositor thread for smoother animations.
**Action:** Always check for redundant JavaScript smooth scrolling and replace with native CSS where accessibility (prefers-reduced-motion) can be respected.
