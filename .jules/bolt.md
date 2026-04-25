## 2026-04-25 - Native Smooth Scrolling & Non-blocking Scripts
**Learning:** Offloading smooth scroll animations to the browser's compositor thread via CSS 'scroll-behavior: smooth' is more performant than JS-driven 'scrollIntoView'. Additionally, placing scripts in the head with 'defer' optimizes the critical rendering path by allowing parallel downloads without blocking DOM parsing.
**Action:** Prefer native CSS features for animations and use 'defer' for non-critical scripts.
