## 2025-05-18 - Native CSS Smooth Scroll vs. JS scrollIntoView
**Learning:** Browser-native `scroll-behavior: smooth` is significantly more performant than JavaScript-driven smooth scrolling because it can be handled by the compositor thread, reducing main-thread jank. However, it requires manual focus management for accessibility since it doesn't automatically move focus like a native anchor jump.
**Action:** Always prefer CSS for scroll animations and use `element.focus({ preventScroll: true })` to maintain accessibility without disrupting the animation.
