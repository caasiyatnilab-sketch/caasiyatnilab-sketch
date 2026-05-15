## 2025-05-14 - Native Smooth Scroll & Focus Management
**Learning:** Offloading smooth-scroll animations to the browser via CSS `scroll-behavior: smooth` reduces main-thread work. To maintain accessibility, programmatic focus must be moved to the target section using `element.focus({ preventScroll: true })` to prevent the focus shift from conflicting with the smooth scroll animation.
**Action:** Use CSS for animations and JS only for focus synchronization when implementing in-page navigation.
