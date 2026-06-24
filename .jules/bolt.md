## 2026-06-24 - Native Smooth Scrolling
**Learning:** Native CSS `scroll-behavior: smooth` is significantly more efficient than JavaScript-based `scrollIntoView({ behavior: 'smooth' })` because it offloads the animation to the browser's compositor thread. It also maintains native browser behaviors like URL hash updates.
**Action:** Always prefer native CSS properties for common UI interactions (like scrolling) before reaching for JavaScript-based solutions.
