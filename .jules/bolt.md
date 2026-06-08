## 2026-06-08 - Replacing JS Smooth Scroll with Native CSS
**Learning:** Native CSS `scroll-behavior: smooth` is more efficient than JavaScript `scrollIntoView({ behavior: 'smooth' })` as it can be handled by the browser's compositor thread, reducing main-thread work. It also simplifies the codebase and improves reliability.
**Action:** Always prefer native CSS for smooth scrolling. When using it, ensure accessibility by managing focus programmatically after the transition and respecting `prefers-reduced-motion`.
