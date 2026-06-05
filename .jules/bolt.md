## 2026-06-05 - [Native Smooth Scroll vs JS Implementation]
**Learning:** Native CSS `scroll-behavior: smooth` is significantly more efficient than JavaScript-based implementations because it offloads animations to the browser's compositor thread. Additionally, `scroll-margin-top` is essential when using native smooth scroll to prevent content from being hidden behind fixed headers or just to provide visual breathing room.
**Action:** Always prefer CSS for scroll animations and remember to add `scroll-margin-top` to target sections.
