## 2026-05-09 - Shifting Smooth Scrolling to Native CSS and Event Delegation
**Learning:** Offloading smooth scroll animations to the browser's compositor thread via `scroll-behavior: smooth` is more performant than JavaScript-based implementations. Additionally, using event delegation on a common parent (like `<nav>`) instead of attaching individual listeners to every link reduces memory overhead and improves initialization speed.
**Action:** Use native CSS for animations when possible and prefer event delegation for high-frequency or repetitive interactive elements.
